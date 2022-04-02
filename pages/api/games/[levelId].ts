import { NextApiRequest, NextApiResponse } from "next";

import { EXAMPLE } from "../../../constants";

export default function getById(req: NextApiRequest, res: NextApiResponse) {
  // const levelId = req.query.levelId;
  //  TODO generate random game accroding by level

  res.json({ result: EXAMPLE });
}
