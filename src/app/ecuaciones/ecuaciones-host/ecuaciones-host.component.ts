import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CreategameService} from '../../creategame.service';
import {Player} from '../interfaces/interfacess';
// tslint:disable
@Component({
  selector: 'app-ecuaciones-host',
  templateUrl: './ecuaciones-host.component.html',
  styleUrls: ['./ecuaciones-host.component.scss']
})
export class EcuacionesHostComponent implements OnInit {
  idPartida: number;
  players: Player[];
  constructor(
      private router: Router, private creategameService: CreategameService) {
    this.idPartida = Number(this.router.url.split('/').pop());
    this.creategameService.fetchScores(this.idPartida).subscribe(d => {
      const p: Player[] = [];
      for (const key in d) {
        let player: Player = {name: key, score: d[key]};
        p.push(player);
      }
      this.players = p.sort((a, b) => {
        return b.score - a.score;
      });
    });
  }

  ngOnInit() {}
}
