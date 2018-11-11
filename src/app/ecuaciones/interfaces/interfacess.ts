interface Element {
  letter: string;
  subscript: number|undefined;
}

interface Compound {
  constant: number|undefined;
  elements: Element[];
}

export enum Difficulty {
  EASY,
  MEDIUM,
  HARD
}

interface Equation {
  compounds: Compound[];
}

interface Problem {
  equation1: Equation;
  equation2: Equation;
  difficulty: Difficulty;
  solution: number[];
}

export interface Game {
  problems: Problem[];
}
