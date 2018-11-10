interface Element {
    letter: string;
    subscript: number;
}

interface Compound {
    constant: number;
    elements: Element[];
}

export enum Difficulty {
    EASY, MEDIUM, HARD
}

interface Equation {
    compounds: Compound[];
}

interface Problem {
    equation1: Equation;
    equation2: Equation;
    difficulty: Difficulty;
}

export interface Game {
    problems: Problem[];
}
