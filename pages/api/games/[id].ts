import { NextApiRequest, NextApiResponse } from "next";

import { result } from "../../../db";

export default function getById(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;
  res.json({ result: result.find((item) => item.id === id) });
}
