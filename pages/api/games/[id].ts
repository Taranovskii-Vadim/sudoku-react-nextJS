import { NextApiRequest, NextApiResponse } from "next";

import { result } from "../../../db";

export default function getById(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;
  const sudoku = result.find((item) => item.id === id);
  res.json({ result: sudoku ? sudoku.data : [] });
}
