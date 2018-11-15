import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CreategameService} from '../../creategame.service';

@Component({
  selector: 'app-ecuaciones-host',
  templateUrl: './ecuaciones-host.component.html',
  styleUrls: ['./ecuaciones-host.component.scss']
})
export class EcuacionesHostComponent implements OnInit {
  idPartida: number;
  constructor(
      private router: Router, private creategameService: CreategameService) {
    this.idPartida = Number(this.router.url.split('/').pop());
  }

  ngOnInit() {}
}
