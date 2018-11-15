import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AcercaComponent} from './acerca/acerca.component';
import {EcuacionesComponent} from './ecuaciones/ecuaciones.component';
import {InicioEcuacionesComponent} from './ecuaciones/inicio-ecuaciones/inicio-ecuaciones.component';
import {InicioComponent} from './inicio/inicio.component';
import {ReaccionesComponent} from './reacciones/reacciones.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent, data: {state: 'home'}},
  //{path: 'landing', component: LandingComponent, data: {state: 'landing'}},
  {
    path: 'reacciones',
    component: ReaccionesComponent,
    data: {state: 'reacciones'}
  },
  {
    path: 'ecuaciones',
    component: InicioEcuacionesComponent,
    data: {state: 'ecuaciones'}
  },
  {
    path: 'ecuaciones/:gameid',
    component: EcuacionesComponent,
    data: {state: 'ecuaciones'}
  },
  {path: 'acerca', component: AcercaComponent, data: {state: 'acerca'}},
];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule {
}
