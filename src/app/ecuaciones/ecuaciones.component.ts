import {Component, OnInit} from '@angular/core';
import {Game, Difficulty} from './interfaces/interfacess';

@Component({
  selector: 'app-ecuaciones',
  templateUrl: './ecuaciones.component.html',
  styleUrls: ['./ecuaciones.component.scss']
})
export class EcuacionesComponent implements OnInit {

  game : Game = {
    problems: [
      {
        difficulty: Difficulty.EASY,
        equation1: {
          compounds: [
            {
              constant: 1,
              elements: [
                {
                  letter: "P",
                  subscript: 4
                },
                {
                  letter: "O",
                  subscript: 10
                }
              ]
            },
            {
              constant: 6,
              elements: [
                {
                  letter: "H",
                  subscript: 2
                },
                {
                  letter: "O",
                  subscript: 1
                }
              ]
            }
          ]
        },
        equation2: {
          compounds: [
            {
              constant: 4,
              elements: [
                {
                  letter: "H",
                  subscript: 3
                },
                {
                  letter: "P",
                  subscript: 1
                },
                {
                  letter: "O",
                  subscript: 4
                }
              ]
            }
          ]
        }
      }
    ]
  }

  constructor() {}

  ngOnInit() {}
}
