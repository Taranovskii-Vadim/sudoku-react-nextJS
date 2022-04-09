import { NextApiRequest, NextApiResponse } from "next";

import { BASE } from "../../../database";
import { LevelType } from "../../../types";

export default function getById(req: NextApiRequest, res: NextApiResponse) {
  const levelId = req.query.levelId as LevelType;

  const games = BASE[levelId];
  const randomIndex = Math.floor(Math.random() * games.length);

  res.json({ result: games[randomIndex] });
}
