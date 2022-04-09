export type LevelType = "easy" | "medium" | "hard";

export interface Result<T> {
  result: T;
}

export type Template = {
  value: string;
  isCorrect: boolean;
};

export type Game = {
  id: string;
  template: Template[][];
};
