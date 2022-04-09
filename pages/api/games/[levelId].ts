import { NextApiRequest, NextApiResponse } from "next";

import { EXAMPLE } from "../../../constants";
import { BASE, LevelType } from "../../../database";

export default function getByLevelId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const levelId = req.query.levelId as LevelType;

  const games = BASE[levelId];
  const randomIndex = Math.floor(Math.random() * games.length);

  res.json({ result: games[randomIndex] });
}
