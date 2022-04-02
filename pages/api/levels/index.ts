import { NextApiRequest, NextApiResponse } from "next";

import { BASE } from "../../../database";

export default function getLevels(req: NextApiRequest, res: NextApiResponse) {
  const result = Object.keys(BASE);

  res.json({ result });
}
