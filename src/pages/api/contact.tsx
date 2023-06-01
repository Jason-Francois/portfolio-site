import { FormValues } from "@/interfaces/interfaces";
import { error } from "console";
import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
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
      <p>${req.body.fMessage}</p>
      
      <div>
      <h3>Contact Info</h3>
      <p>Name: ${req.body.fName}</p>
      <p>Email: ${req.body.fEmail}</p>
      </div>`,
    };
    let info = await transporter.sendMail(mailOptions);
    res.status(200).json({ msg: "Message sent: " + info.messageId });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
}
