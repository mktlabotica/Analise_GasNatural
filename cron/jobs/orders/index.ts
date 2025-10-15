import { CronJob } from "cron";
import { erp } from "../../../dataSources/erp/index.js";
import prisma from "../../../db/index.js";
import { CreateOrderInput } from "../../../dataSources/erp/types.js";
import { tnNormalStore } from "../../../dataSources/tiendaNube/normalStore.js";
import { sendEmail } from "../../../mail/index.js";
import { saveLogs } from "../../../log/index.js";
import { Prisma } from "@prisma/client";
import { tnWholesaleStore } from "../../../dataSources/tiendaNube/wholesaleStore.js";

const dayInMs = 24 * 60 * 60 * 1000;

const job = async () => {
  console.log("Starting orders job");

  const logs: Prisma.LogCreateManyInput[] = [];

  const syncedOrders = await prisma.order.findMany({
    where: {
      AND: [
        {
          syncAt: {
            not: null,
          },
          createdAt: {
            gte: new Date(new Date().getTime() - dayInMs * 4),
          },
        },
      ],
    },
  });

  const syncedWholesaleOrders = await prisma.wholesaleOrder.findMany({
    where: {
      AND: [
        {
          syncAt: {
            not: null,
          },
          createdAt: {
            gte: new Date(new Date().getTime() - dayInMs * 4),
          },
        },
      ],
    },
  });

  const newOrders = await tnNormalStore.getNewOrders();
  const newWholesaleOrders = await tnWholesaleStore.getNewOrders();

  const ordersToCreate: (CreateOrderInput & {
    orderId: number;
    ogOrderNumber: number;
  })[] = [];
  const allNewOrders = [
    ...newOrders.map((order) => ({ ...order, type: "normal" })),
    ...newWholesaleOrders.map((order) => ({ ...order, type: "wholesale" })),
  ];
  for (const newOrder of allNewOrders) {
    if (
      (newOrder.type === "normal" &&
        syncedOrders.some((o) => o.orderId === newOrder.id)) ||
      (newOrder.type === "wholesale" &&
        syncedWholesaleOrders.some((o) => o.orderId === newOrder.id))
    )
      continue;

    const products = await Promise.all(
      newOrder.products
        .filter((p) => p.sku)
        .map(async (product) => {
          if (!product.sku)
            throw new Error(`Product ${product.product_id} has no SKU`);
          const erpProduct = await erp.getOneProduct(product.sku);
          if (!erpProduct) {
            throw new Error(`Product ${product.sku} not found in ERP`);
          }

          return {
            productIdInterData: erpProduct.prd_codigo,
            quantity: product.quantity,
            price: product.price,
            sku: product.sku,
          };
        })
    ).catch(async (error) => {
      await sendEmail(
        `Error al sincronizar orden ${newOrder.number}: ${error.message}`,
        `Error al sincronizar orden ${newOrder.number}`
      );
      return [];
    });

    if (products.length === 0) continue;

    const createdAtDate = new Date(newOrder.created_at);

    const parsedDiscount = parseFloat(newOrder.discount || "0");

    const usedCoupons = newOrder.coupon.map((c) => c.code).join(", ");

    ordersToCreate.push({
      fecha_emision: `${createdAtDate.getFullYear()}-${(
        createdAtDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}-${createdAtDate
        .getDate()
        .toString()
        .padStart(2, "0")}`,
      cliente_nombre: newOrder.customer.name || newOrder.contact_name,
      cliente_doc_tipo: newOrder.customer.identification.length === 11 ? 6 : 3,
      cliente_nro_doc: parseInt(
        newOrder.customer.identification.replace("-", "").replace(".", "")
      ),
      cliente_domicilio: `${newOrder.billing_address} ${
        newOrder.billing_number
      } ${newOrder.billing_floor || ""}, ${newOrder.billing_locality || ""}, ${
        newOrder.billing_city
      }, ${newOrder.billing_province}, ${newOrder.billing_country}`,
      cliente_codigo_postal: newOrder.billing_zipcode,
      cliente_email: newOrder.contact_email,
      cliente_telefono: newOrder.contact_phone,
      lugar_de_entrega: `${newOrder.shipping_address.address || ""} ${
        newOrder.shipping_address.number || ""
      } ${newOrder.shipping_address.floor || ""}, ${
        newOrder.shipping_address.locality || ""
      }, ${newOrder.shipping_address.city}, ${
        newOrder.shipping_address.province
      }, ${newOrder.shipping_address.country}`,
      forma_de_envio: newOrder.shipping_option || "",
      forma_de_pago: newOrder.gateway_name || "",
      observaciones: `Forma de envío: ${
        newOrder.shipping_option || ""
      }, Costo: ${newOrder.shipping_cost_customer || ""}\nNumero de orden: ${
        newOrder.number
      }\nTienda: ${newOrder.type === "normal" ? "minorista" : "mayorista"}\n${
        usedCoupons ? `Cupones: ${usedCoupons}` : ""
      }`,
      pk_id:
        newOrder.type === "normal"
          ? parseInt("5" + newOrder.number)
          : parseInt("6" + newOrder.number),
      productos: products
        .map((product): CreateOrderInput["productos"][number] => ({
          producto_codigo: product.productIdInterData,
          producto_cantidad: product.quantity,
          producto_cod_alternativo: product.sku,
          producto_precio_unitario: parseFloat(product.price),
        }))
        .concat(
          parsedDiscount > 0
            ? [
                {
                  producto_codigo: 100000,
                  producto_precio_unitario: parsedDiscount,
                  producto_cantidad: 1.0,
                },
              ]
            : []
        ),
      orderId: newOrder.id,
      sucursal_codigo: newOrder.type === "normal" ? "5" : "6",
      ogOrderNumber: newOrder.number,
    });
  }

  for (const order of ordersToCreate) {
    const { orderId, ogOrderNumber, ...rest } = order;
    if (
      order.sucursal_codigo === "5" &&
      (await prisma.order.findFirst({ where: { orderId: orderId } }))
    ) {
      continue;
    }
    if (
      order.sucursal_codigo === "6" &&
      (await prisma.wholesaleOrder.findFirst({ where: { orderId: orderId } }))
    ) {
      continue;
    }
    await erp.createOrder(rest, {
      onSuccess: async () => {
        console.log("Order created!!!!");
        logs.push({
          message: `Orden ${order.pk_id} en la tienda ${
            order.sucursal_codigo === "5" ? "minorista" : "mayorista"
          } sincronizada correctamente`,
          type: "success",
          data: JSON.stringify(order),
        });
        if (order.sucursal_codigo === "5") {
          await prisma.order.create({
            data: {
              orderId: orderId,
              syncAt: new Date(),
              number: ogOrderNumber,
            },
          });
        } else {
          await prisma.wholesaleOrder.create({
            data: {
              orderId: orderId,
              syncAt: new Date(),
              number: ogOrderNumber,
            },
          });
        }
      },
      onError: async (_, error) => {
        await sendEmail(
          `Error al sincronizar orden ${order.pk_id}: ${error}`,
          `Error al sincronizar orden ${order.pk_id}`
        );
      },
    });
  }

  if (logs.length) {
    await saveLogs(logs);
  }
  console.log("Orders job finished:" + ordersToCreate.length);
};

export default {
  name: "orders",
  cronJob: new CronJob("2,7,12,17,22,27,32,37,42,47,52,57 8-20 * * *", job),
  run: job,
};
