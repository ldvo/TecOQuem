import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AcercaComponent} from './acerca/acerca.component';
import {EcuacionesHostComponent} from './ecuaciones/ecuaciones-host/ecuaciones-host.component';
import {EcuacionesComponent} from './ecuaciones/ecuaciones.component';
import {InicioEcuacionesComponent} from './ecuaciones/inicio-ecuaciones/inicio-ecuaciones.component';
import {LandingComponent} from './landing/landing.component';
import {ReaccionesComponent} from './reacciones/reacciones.component';

const routes: Routes = [
  {path: '', component: LandingComponent, data: {state: 'home'}},
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
  {
    path: 'ecuacioneshost/:gameid',
    component: EcuacionesHostComponent,
    data: {state: 'ecuaciones'}
  },
  {path: 'acerca', component: AcercaComponent, data: {state: 'acerca'}},
];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule {
}
