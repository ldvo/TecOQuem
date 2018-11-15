interface Element {
  letter: string;
  subscript: number;
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

export interface Problem {
  equation1: Equation;
  equation2: Equation;
  difficulty: string;
  solution: number[];
}

export interface Player {
  name: string;
  score: number;
}

export interface Game {
  problems: Problem[];
}
