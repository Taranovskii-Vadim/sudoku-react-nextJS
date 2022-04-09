import { EXAMPLE } from "./constants";

export type LevelType = "easy" | "medium" | "hard";

export type Template = {
  value: string;
  isCorrect: boolean;
};

export type Game = {
  id: string;
  template: Template[][];
};

type DataBase = {
  [key in LevelType]: Game[];
};

export const BASE: DataBase = {
  easy: [{ id: "1", template: EXAMPLE }],
  medium: [{ id: "2", template: EXAMPLE }],
  hard: [{ id: "3", template: EXAMPLE }],
};
