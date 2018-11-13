import {Component, OnInit} from '@angular/core';

import {CheckEquationService} from '../check-equation.service';

import {Difficulty, Game, Problem} from './interfaces/interfacess';

@Component({
  selector: 'app-ecuaciones',
  templateUrl: './ecuaciones.component.html',
  styleUrls: ['./ecuaciones.component.scss']
})
export class EcuacionesComponent implements OnInit {
  phase = 0;
  nombre = '';
  game: Game = {
    problems: [
      {
        difficulty: Difficulty.EASY,
        equation1: {
          compounds:
              [
                {
                  constant: undefined,
                  elements:
                      [
                        {letter: 'P', subscript: 4},
                        {letter: 'O', subscript: 10}
                      ]
                },
                {
                  constant: undefined,
                  elements:
                      [{letter: 'H', subscript: 2}, {letter: 'O', subscript: 1}]
                }
              ]
        },
        equation2: {
          compounds: [{
            constant: 1,
            elements:
                [
                  {letter: 'H', subscript: 4}, {letter: 'P', subscript: 4},
                  {letter: 'O', subscript: 12}
                ]
          }]
        },
        solution: [2, 4]
      },
      {
        difficulty: Difficulty.EASY,
        equation1: {
          compounds:
              [
                {
                  constant: undefined,
                  elements:
                      [{letter: 'H', subscript: 2}, {letter: 'O', subscript: 1}]
                },
                {constant: 2, elements: [{letter: 'N', subscript: 2}]}
              ]
        },
        equation2:
            {
              compounds:
                  [{
                    constant: 2,
                    elements:
                        [
                          {letter: 'H', subscript: 3},
                          {letter: 'P', subscript: 1},
                          {letter: 'O', subscript: 4}
                        ]
                  }]
            },
        solution: [4]
      }
    ]
  };

  currentProblem: Problem|undefined;
  currentProblemIndex = 0;
  currentProblemAnswers: string[];
  currentAnswerIndex = 0;
  eq1Constants: number[];
  eq2Constants: number[];
  totalCorrectAnswers = 0;

  constructor(private checkEquationService: CheckEquationService) {}

  ngOnInit() {
    this.setUpProblem(this.game.problems[this.currentProblemIndex]);
  }

  setUpProblem(p: Problem) {
    this.currentProblem = undefined;
    this.eq1Constants = p.equation1.compounds.map(c => {
      return c.constant;
    });
    this.eq2Constants = p.equation2.compounds.map(c => {
      return c.constant;
    });
    this.currentProblem = p;
  }

  nextProblem() {
    const problemAnswers =
        this.eq1Constants.concat(this.eq2Constants).map(c => {
          if (c === null || c === undefined) {
            return 1;
          }
          return c;
        });
    if ((this.checkEquationService
             .validateAnswer(this.currentProblem, problemAnswers)
             .filter(s => s === true)
             .length) === problemAnswers.length) {
      this.totalCorrectAnswers++;
    }
    this.currentProblemIndex++;
    if (this.currentProblemIndex < this.game.problems.length) {
      this.setUpProblem(this.game.problems[this.currentProblemIndex]);
    } else {
      this.phase = 3;
    }
  }

  getScore() {
    if (this.currentProblemIndex !== 0) {
      return this.totalCorrectAnswers / this.currentProblemIndex * 100;
    }
    return 0;
  }
}
