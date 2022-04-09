import { EXAMPLE } from "./constants";
import { Game, LevelType } from "./types";

type DataBase = {
  [key in LevelType]: Game[];
};

export const BASE: DataBase = {
  easy: [{ id: "1", template: EXAMPLE }],
  medium: [{ id: "2", template: EXAMPLE }],
  hard: [{ id: "3", template: EXAMPLE }],
};
