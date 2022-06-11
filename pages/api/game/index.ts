import { NextApiRequest, NextApiResponse } from "next";

import { BASE } from "../../../database";

export default function getById(req: NextApiRequest, res: NextApiResponse) {
  const randomIndex = Math.floor(Math.random() * BASE.length);

  res.json({ result: BASE[randomIndex] });
}
