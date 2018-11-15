import {Component, OnInit} from '@angular/core';
import { AngularFireDatabase  } from 'angularfire2/database';
import {CreategameService} from './../../creategame.service';
import {Difficulty, Game, Problem} from './../interfaces/interfacess';

@Component({
  selector: 'app-inicio-ecuaciones',
  templateUrl: './inicio-ecuaciones.component.html',
  styleUrls: ['./inicio-ecuaciones.component.scss']
})
export class InicioEcuacionesComponent implements OnInit {
  game: Game = {
    problems: [
      {
        difficulty: "EASY",
        equation1: {
          compounds:
              [
                {
                  constant: 1,
                  elements:
                      [
                        {letter: 'P', subscript: 4},
                        {letter: 'O', subscript: 10}
                      ]
                },
                {
                  constant: 1,
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
        difficulty: "EASY",
        equation1: {
          compounds:
              [
                {
                  constant: 1,
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
  constructor(db: AngularFireDatabase, private service: CreategameService) {

    // cona/ sole.log(this.game);

    // db.object('games/123').set(this.game);
    this.service.uploadScore(123, 'luis', 0);

  }

  ngOnInit() {}
}
