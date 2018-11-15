import {Component, OnInit} from '@angular/core';

import {CheckEquationService} from '../check-equation.service';

import {Difficulty, Game, Problem} from './interfaces/interfacess';

import { CreategameService } from './../creategame.service';

@Component({
  selector: 'app-ecuaciones',
  templateUrl: './ecuaciones.component.html',
  styleUrls: ['./ecuaciones.component.scss']
})
export class EcuacionesComponent implements OnInit {
  phase = 0;
  nombre = '';
  fetched = false;
  game: Game;
  // game: Game = {
  //   problems: [
  //     {
  //       difficulty: "EASY",
  //       equation1: {
  //         compounds:
  //             [
  //               {
  //                 constant: undefined,
  //                 elements:
  //                     [
  //                       {letter: 'P', subscript: 4},
  //                       {letter: 'O', subscript: 10}
  //                     ]
  //               },
  //               {
  //                 constant: undefined,
  //                 elements:
  //                     [{letter: 'H', subscript: 2}, {letter: 'O', subscript: 1}]
  //               }
  //             ]
  //       },
  //       equation2: {
  //         compounds: [{
  //           constant: 1,
  //           elements:
  //               [
  //                 {letter: 'H', subscript: 4}, {letter: 'P', subscript: 4},
  //                 {letter: 'O', subscript: 12}
  //               ]
  //         }]
  //       },
  //       solution: [2, 4]
  //     },
  //     {
  //       difficulty: "EASY",
  //       equation1: {
  //         compounds:
  //             [
  //               {
  //                 constant: undefined,
  //                 elements:
  //                     [{letter: 'H', subscript: 2}, {letter: 'O', subscript: 1}]
  //               },
  //               {constant: 2, elements: [{letter: 'N', subscript: 2}]}
  //             ]
  //       },
  //       equation2:
  //           {
  //             compounds:
  //                 [{
  //                   constant: 2,
  //                   elements:
  //                       [
  //                         {letter: 'H', subscript: 3},
  //                         {letter: 'P', subscript: 1},
  //                         {letter: 'O', subscript: 4}
  //                       ]
  //                 }]
  //           },
  //       solution: [4]
  //     }
  //   ]
  // };

  currentProblem: Problem|undefined;
  currentProblemIndex = 0;
  currentProblemAnswers: string[];
  currentAnswerIndex = 0;
  eq1Constants: number[];
  eq2Constants: number[];
  totalCorrectAnswers = 0;
  checkSolution = false;
  eq1CorrectConstants: boolean[];
  eq2CorrectConstants: boolean[];
  isCorrect = false;
  isLoading = true;

  constructor(private checkEquationService: CheckEquationService, private service: CreategameService) {
  
  }

  ngOnInit() {
    this.service.fetchGame(123).then(val => {
      this.game = val.val();
      this.setUpProblem(this.game.problems[0]);
      this.isLoading = false;
      
    })
  }

  setUpProblem(p: Problem) {
    this.currentProblem = undefined;
    this.eq1Constants = p.equation1.compounds.map(c => {
      return c.constant;
    });
    this.eq2Constants = p.equation2.compounds.map(c => {
      return c.constant;
    });
    this.checkSolution = false;
    this.currentProblem = p;
  }

  checkProblem() {
    const problemAnswers =
        this.eq1Constants.concat(this.eq2Constants).map(c => {
          if (c === null || c === undefined) {
            return 1;
          }
          return c;
        });
    const correctConstants = this.checkEquationService.validateAnswer(
        this.currentProblem, problemAnswers);
    this.eq1CorrectConstants =
        correctConstants.slice(0, this.eq1Constants.length);
    this.eq2CorrectConstants = correctConstants.slice(this.eq1Constants.length);
    if (correctConstants.filter(s => s === true).length ===
        problemAnswers.length) {
      this.totalCorrectAnswers++;
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }
    this.checkSolution = true;
    this.currentProblemIndex++;
  }

  nextProblem() {
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
