import {Component, OnInit} from '@angular/core';

import {Difficulty, Game} from './interfaces/interfacess';

@Component({
  selector: 'app-ecuaciones',
  templateUrl: './ecuaciones.component.html',
  styleUrls: ['./ecuaciones.component.scss']
})
export class EcuacionesComponent implements OnInit {
  game: Game = {
    problems: [{
      difficulty: Difficulty.EASY,
      equation1: {
        compounds:
            [
              {
                constant: undefined,
                elements:
                    [{letter: 'P', subscript: 4}, {letter: 'O', subscript: 10}]
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
          constant: 4,
          elements:
              [
                {letter: 'H', subscript: 3}, {letter: 'P', subscript: 1},
                {letter: 'O', subscript: 4}
              ]
        }]
      },
      solution: [4]
    }]
  };

  constructor() {}

  ngOnInit() {}
}
