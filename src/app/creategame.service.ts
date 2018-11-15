import { Injectable } from '@angular/core';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { DataSnapshot, AngularFireList } from '@angular/fire/database/interfaces';
import { Game } from './ecuaciones/interfaces/interfacess';


@Injectable({
  providedIn: 'root'
})
export class CreategameService {

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
      problem: 'nuevo problema',
      solucion: 'solucion perrona'
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

  validateGame(id: number) : boolean {

    this.db.object('games/' + id).query.once('value');



    return true;
  }

      // this.service.fetchGame(123).then(val => {
    //   console.log(val.val());
    // });

  fetchGame(id: number) : Promise<DataSnapshot> {

    return this.db.list('/games/' + id).query.once('value');

  }

  increaseCounter(item: number) {
    console.log(item);
      this.db.object('gameId').set(item + 1);
  }
}
