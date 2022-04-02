import { NextApiRequest, NextApiResponse } from "next";

import { EXAMPLE } from "../../../constants";

export default function getByLevelId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const levelId = req.query.levelId;
  //  TODO generate random game accroding by level
  // TODO send to client id of game
  res.json({ result: EXAMPLE });
}
