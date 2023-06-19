import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const formspreeURL = process.env.FORMSPREE_LINK;
  if (formspreeURL) {
    axios
      .post(formspreeURL, req.body)
      .then((response) => {
        res.status(200).json({ msg: "Message sent successfully" });
      })
      .catch((err) => {
        res.status(500).json({ msg: err });
      });
  }
}
