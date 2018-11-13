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
                      [{letter: 'H', subscript: 2}, {letter: 'O', subscript: undefined}]
                }
              ]
        },
        equation2: {
          compounds: [{
            constant: 4,
            elements:
                [
                  {letter: 'H', subscript: 3}, {letter: 'P', subscript: 1},
                  {letter: 'O', subscript: 4}
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
                      [
                        {letter: 'H', subscript: 2},
                        {letter: 'O', subscript: undefined}
                      ]
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
  eq1AnswerIndexMap = {};
  eq2AnswerIndexMap = {};
  totalCorrectAnswers = 0;

  constructor(private checkEquationService: CheckEquationService) {}

  ngOnInit() {
    this.setUpProblem(this.game.problems[this.currentProblemIndex]);
  }

  setUpProblem(p: Problem) {
    this.currentProblem = undefined;
    this.currentAnswerIndex = 0;
    this.eq1AnswerIndexMap = {};
    this.eq2AnswerIndexMap = {};
    const eq1AnswerCount = p.equation1.compounds
                               .filter((c) => {
                                 if (c.constant === undefined) {
                                   return true;
                                 }
                                 return false;
                               })
                               .length;
    const eq2AnswerCount = p.equation2.compounds
                               .filter((c) => {
                                 if (c.constant === undefined) {
                                   return true;
                                 }
                                 return false;
                               })
                               .length;
    const totalAnswerCount = eq1AnswerCount + eq2AnswerCount;
    this.currentProblemAnswers = new Array(totalAnswerCount);
    this.currentProblemAnswers.fill(null);
    this.currentProblem = p;
  }

  getCurrentAnswerIndex(e: number, i: number) {
    if (e === 1) {
      if (this.eq1AnswerIndexMap[i] === undefined) {
        this.eq1AnswerIndexMap[i] = this.currentAnswerIndex++;
      }
      return this.eq1AnswerIndexMap[i];
    }
    if (this.eq2AnswerIndexMap[i] === undefined) {
      this.eq2AnswerIndexMap[i] = this.currentAnswerIndex++;
    }
    return this.eq2AnswerIndexMap[i];
  }

  nextProblem() {
    const problemAnswers = this.currentProblemAnswers.map((v) => {
      if (v === null) {
        return 1;
      }
      return Number(v);
    });
    if (this.checkEquationService.validateAnswer(
            this.currentProblem, problemAnswers)) {
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
