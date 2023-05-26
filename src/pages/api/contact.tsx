import { FormValues } from "@/interfaces/interfaces";
import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");
async function sendEmail(emailConfig: FormValues) {
  const transporterOptions = {
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  };
  let transporter = nodemailer.createTransport(transporterOptions);

  let mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: process.env.MAIL_USERNAME,
    subject: "Personal Website Inquiry",
    html: `
    <h1>ATTN</h1>

    <h2>Message:</h2>
    <p>${emailConfig.fMessage}</p>
    
    <div>
    <h3>Contact Info</h3>
    <p>Name: ${emailConfig.fName}</p>
    <p>Email: ${emailConfig.fEmail}</p>
    </div>`,
  };
  let info = await transporter.sendMail(mailOptions);
  console.log("Message sent: %s", info.messageId);
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  sendEmail(req.body).catch(console.error);
  res.status(200).json({ name: process.env.MAIL_USERNAME });
}
