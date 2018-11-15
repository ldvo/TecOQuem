import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
// tslint:disable-next-line:max-line-length
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AcercaComponent} from './acerca/acerca.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EcuacionesComponent} from './ecuaciones/ecuaciones.component';
import {InicioEcuacionesComponent} from './ecuaciones/inicio-ecuaciones/inicio-ecuaciones.component';
import {InicioComponent} from './inicio/inicio.component';
import {ReaccionesComponent} from './reacciones/reacciones.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent, InicioComponent, ReaccionesComponent, EcuacionesComponent,
    AcercaComponent, InicioEcuacionesComponent, LandingComponent
  ],
  imports: [
    FormsModule, MatInputModule, MatFormFieldModule, MatCardModule,
    BrowserModule, BrowserAnimationsModule, AppRoutingModule, MatToolbarModule,
    FlexLayoutModule, MatSidenavModule, MatButtonModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
