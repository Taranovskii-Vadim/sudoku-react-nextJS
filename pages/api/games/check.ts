import { NextApiRequest, NextApiResponse } from "next";

import { result } from "../../../db";

// can storage answers in db, but i want to create function that can solve sudoku
const solveSudokuFor = (id: string): string[][] => {
  const template = result.find((item) => item.id === id);

  return [];
};

export default function checkResult(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const { id, data } = JSON.parse(body) as { id: string; data: string[][] };
  const solvedSudoku = solveSudokuFor(id);

  if (solvedSudoku.length) {
    res.json({ wrongPositions: [] });
  } else {
    res.json({ error: "wrong id" });
  }
}
