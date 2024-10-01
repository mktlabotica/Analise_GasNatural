import nodemailer from "nodemailer";
import { text } from "stream/consumers";

// create a transporter using gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tomiemailsnodejs@gmail.com",
    pass: "gjms wkoa vyvp ftna",
  },
});

export const sendEmail = async (text: string) => {
  const mailOptions = {
    from: "tomiemailsnodejs@gmail.com",
    to: "dev@digitalmix.ar",
    subject: "Sending Email using Node.js",
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

  return info;
};
