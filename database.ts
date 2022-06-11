import { EASY_EXAMPLE, MEDIUM_EXAMPLE, HARD_EXAMPLE } from "./constants";
import { Game, LevelType } from "./types";

type DataBase = {
  [key in LevelType]: Game[];
};

export const BASE: DataBase = {
  easy: [{ id: "1", template: EASY_EXAMPLE }],
  medium: [{ id: "2", template: MEDIUM_EXAMPLE }],
  hard: [{ id: "3", template: HARD_EXAMPLE }],
};
