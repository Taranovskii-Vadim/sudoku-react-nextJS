import { NextApiRequest, NextApiResponse } from "next";

import { BASE } from "../../../database";
import { LevelType } from "../../../types";

export default function getLevels(req: NextApiRequest, res: NextApiResponse) {
  const result = Object.keys(BASE) as LevelType[];

  res.json({ result });
}
