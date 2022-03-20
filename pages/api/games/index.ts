import { NextApiRequest, NextApiResponse } from "next";

import { result } from "../../../db";

export default function games(req: NextApiRequest, res: NextApiResponse) {
  res.json({ result });
}
