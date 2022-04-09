import { NextApiRequest, NextApiResponse } from "next";

import { EXAMPLE } from "../../../constants";
import { BASE, Game, LevelType } from "../../../database";

// can storage answers in db, but i want to create function that can solve sudoku
const solveSudokuFor = (level: LevelType, id: string): string[][] => {
  const games = BASE[level];
  const { template } = games.find((item) => item.id === id) as Game;

  const getSolution = (sudoku: string[][]): string[][] => {
    const size = sudoku.length;
    const boxSize = Math.sqrt(sudoku.length);

    const findEmptyPosition = (): number[] => {
      for (let r = 0; r < size; r++) {
        const column = sudoku[r];
        for (let c = 0; c < size; c++) {
          if (!column[c]) {
            return [r, c];
          }
        }
      }

      return [];
    };

    const isSudokuValid = ([r, c]: number[], candidat: string): boolean => {
      for (let i = 0; i < size; i++) {
        if (sudoku[r][i] === candidat && i !== c) {
          return false;
        }
      }

      for (let i = 0; i < size; i++) {
        if (sudoku[i][c] === candidat && i !== r) {
          return false;
        }
      }

      const boxRow = Math.floor(r / boxSize) * boxSize;
      const boxCol = Math.floor(c / boxSize) * boxSize;

      for (let i = boxRow; i < boxRow + boxSize; i++) {
        for (let j = boxCol; j < boxCol + boxSize; j++) {
          if (sudoku[i][j] === candidat && i !== r && j !== c) {
            return false;
          }
        }
      }

      return true;
    };

    const solve = () => {
      const positions = findEmptyPosition();

      if (!positions.length) {
        return true;
      }

      for (let i = 1; i <= size; i++) {
        const insertCandidat = i.toString();
        const isValid = isSudokuValid(positions, insertCandidat);

        if (isValid) {
          const [r, c] = positions;
          sudoku[r][c] = insertCandidat;

          if (solve()) {
            return true;
          }

          sudoku[r][c] = "";
        }
      }

      return false;
    };

    solve();
    return sudoku;
  };

  return template
    ? getSolution(
        template.map((yItem) => {
          return yItem.map((xItem) => xItem.value);
        })
      )
    : [];
};

const checkSolution = (
  payload: { value: string; isCorrect: boolean }[][],
  result: string[][]
): { value: string; isCorrect: boolean }[][] => {
  for (let y = 0; y < payload.length; y++) {
    for (let x = 0; x < payload[y].length; x++) {
      if (payload[y][x].value && payload[y][x].value !== result[y][x]) {
        payload[y][x].isCorrect = false;
      }
    }
  }

  return payload;
};

export default function checkResult(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const { id, levelId, data } = JSON.parse(body) as {
    id: string;
    levelId: LevelType;
    data: { value: string; isCorrect: boolean }[][];
  };

  const solvedSudoku = solveSudokuFor(levelId, id);
  const result = checkSolution(data, solvedSudoku);

  res.json({ result });
}
