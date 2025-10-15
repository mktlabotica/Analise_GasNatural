import nodemailer from "nodemailer";

const sentEmailsSet = new Set<string>();
setInterval(() => {
  sentEmailsSet.clear();
}, 1000 * 60 * 60 * 24);

// create a transporter using gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tomiemailsnodejs@gmail.com",
    pass: "gjms wkoa vyvp ftna",
  },
});

export const sendEmail = async (text: string, tag?: string) => {
  if (sentEmailsSet.has(tag || text)) {
    console.log("Email already sent");
    return;
  }

  const mailOptions = {
    from: "tomiemailsnodejs@gmail.com",
    to: "dev@digitalmix.ar",
    subject: "lb: " + (tag || "Notificación"),
    text,
  };

  const info = await transporter.sendMail(mailOptions).catch((error) => {
    console.error(error);
  });

  if (!info) {
    console.error("Error sending email");
    return;
  }

  console.log("Email sent: " + info.response);
  sentEmailsSet.add(tag || text);

  return info;
};
