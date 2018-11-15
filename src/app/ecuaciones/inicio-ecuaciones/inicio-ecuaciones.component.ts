import {Component, OnInit} from '@angular/core';
import { AngularFireDatabase  } from 'angularfire2/database';
import {CreategameService} from './../../creategame.service';

@Component({
  selector: 'app-inicio-ecuaciones',
  templateUrl: './inicio-ecuaciones.component.html',
  styleUrls: ['./inicio-ecuaciones.component.scss']
})
export class InicioEcuacionesComponent implements OnInit {
  constructor(db: AngularFireDatabase, private service: CreategameService) {}

  ngOnInit() {}
}
