import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AcercaComponent} from './acerca/acerca.component';
import {EcuacionesComponent} from './ecuaciones/ecuaciones.component';
import {InicioEcuacionesComponent} from './ecuaciones/inicio-ecuaciones/inicio-ecuaciones.component';
import {InicioComponent} from './inicio/inicio.component';
import {ReaccionesComponent} from './reacciones/reacciones.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'reacciones', component: ReaccionesComponent},
  {path: 'ecuaciones', component: InicioEcuacionesComponent},
  {path: 'ecuaciones/:gameid', component: EcuacionesComponent},
  {path: 'acerca', component: AcercaComponent},
];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule {
}
