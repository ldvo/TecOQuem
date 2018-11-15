import { Injectable } from '@angular/core';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { DataSnapshot, AngularFireList } from '@angular/fire/database/interfaces';
import { Game } from './ecuaciones/interfaces/interfacess';


@Injectable({
  providedIn: 'root'
})
export class CreategameService {

  game: Game = {
    problems: [
      { // 1
        difficulty: "EASY",
        equation1: {
          compounds:
              [
                {
                  constant: -1,
                  elements:
                      [
                        {letter: 'P', subscript: 4},
                        {letter: 'O', subscript: 10}
                      ]
                },
                {
                  constant: -1,
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
      { // 2
        difficulty: "EASY",
        equation1: {
          compounds:
              [
                {
                  constant: 2,
                  elements:
                      [
                        {letter: 'Fe', subscript: 1},
                        {letter: 'Cl', subscript: 3}
                      ]
                },
                {
                  constant: -1,
                  elements:
                      [{letter: 'Mg', subscript: 1}, {letter: 'O', subscript: 1}]
                }
              ]
        },
        equation2: {
          compounds: [{
            constant: 1,
            elements:
                [
                  {letter: 'Fe', subscript: 2}, {letter: 'O', subscript: 3}
                ]
          },
        {
          constant: -1,
          elements: [
            {letter: 'Mg', subscript: 1}, {letter: 'Cl', subscript: 2}
          ]
        }]
        },
        solution: [2, 4]
      }, // 3
      {
        difficulty: "EASY",
        equation1: {
          compounds:
              [
                {
                  constant: 1,
                  elements:
                      [
                        {letter: 'C', subscript: 1},
                        {letter: 'H', subscript: 4}
                      ]
                },
                {
                  constant: -1,
                  elements:
                      [{letter: 'O', subscript: 2},]
                }
              ]
        },
        equation2: {
          compounds: [{
            constant: 1,
            elements:
                [
                  {letter: 'C', subscript: 1}, {letter: 'O', subscript: 2}
                ]
          },
        {
          constant: -1,
          elements: [
            {letter: 'H', subscript: 2}, {letter: 'O', subscript: 1}
          ]
        }]
        },
        solution: [2, 4]
      },
      { // 4
        difficulty: "EASY",
        equation1: {
          compounds:
              [
                {
                  constant: 6,
                  elements:
                      [
                        {letter: 'Li', subscript: 1},
                      ]
                },
                {
                  constant: -1,
                  elements:
                      [{letter: 'H', subscript: 3}, {letter: 'P', subscript: 1}, {letter: 'O', subscript: 4}]
                }
              ]
        },
        equation2: {
          compounds: [{
            constant: -1,
            elements:
                [
                  {letter: 'H', subscript: 2}
                ]
          },
        {
          constant: 2,
          elements: [
            {letter: 'Li', subscript: 3}, {letter: 'P', subscript: 1}, {letter: 'O', subscript: 4}
          ]
        }]
        },
        solution: [2, 4]
      }
    ]
  };

  constructor(private db: AngularFireDatabase) { }

      // When thay click create game we should do something like this.

    // -------------------------
    
    // this.service.newGame().then((value) => {
    //   console.log('on comp', value.val());
    //   this.service.createGame(value.val());
    //   this.service.increaseCounter(value.val());
    // });
    // -------------------------

  newGame() : Promise<DataSnapshot> {
    console.log('in new game');
    return this.db.object('/gameId').query.once('value');
  }

  // we create a game that corresponds to our global ID

  createGame(id: number) {
    this.db.object('games/' + id).set({
      problems: this.game.problems
    })
  }

  /*
To validate if it exists, we return a promise, so you check it like this.
  .then(snap => {
      if (snap.val()) {
        console.log('exist');
      } else {
        console.log('no existe');
      }
    });

  */

  validateGame(id: number) : Promise<DataSnapshot> {

    return this.db.object('games/' + id).query.once('value');
  }

      // this.service.fetchGame(123).then(val => {
    //   console.log(val.val());
    // });

  fetchGame(id: number) : Promise<DataSnapshot> {

    return this.db.list('/games/' + id).query.once('value');

  }

  uploadScore(gameId: number, playerName: string, score: number) {
    this.db.object(`/games/${gameId}/players/${playerName}`).set(score);
  }

  fetchScores(gameId: number) : Observable<{}> {
    return this.db.object(`/games/${gameId}/players`).valueChanges();
  }

  increaseCounter(item: number) {
    console.log(item);
      this.db.object('gameId').set(item + 1);
  }
}
