import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';

import {CreategameService} from './../../creategame.service';
import {Difficulty, Game, Problem} from './../interfaces/interfacess';

@Component({
  selector: 'app-inicio-ecuaciones',
  templateUrl: './inicio-ecuaciones.component.html',
  styleUrls: ['./inicio-ecuaciones.component.scss']
})
export class InicioEcuacionesComponent {
  isLoading = false;
  idPartida = '';
  idNotFound = false;

  constructor(
      private creategameService: CreategameService, private router: Router) {}

  loadGame() {
    this.isLoading = true;
    this.idNotFound = false;
    this.creategameService.validateGame(Number(this.idPartida)).then(snap => {
      this.isLoading = false;
      if (snap.val()) {
        this.router.navigate(['/ecuaciones/' + this.idPartida]);
      } else {
        this.idNotFound = true;
      }
    });
  }

  createGame() {
    this.creategameService.newGame().then((value) => {
      const gameId = value.val();
      this.creategameService.createGame(value.val());
      this.creategameService.increaseCounter(value.val());
      this.router.navigate(['ecuacioneshost/' + gameId]);
    });
  }
}
