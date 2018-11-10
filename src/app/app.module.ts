import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReaccionesComponent } from './reacciones/reacciones.component';
import { EcuacionesComponent } from './ecuaciones/ecuaciones.component';
import { AcercaComponent } from './acerca/acerca.component';

@NgModule({
  declarations: [AppComponent, InicioComponent, ReaccionesComponent, EcuacionesComponent, AcercaComponent],
  imports: [
    BrowserModule, BrowserAnimationsModule, AppRoutingModule, MatToolbarModule,
    FlexLayoutModule, MatSidenavModule, MatButtonModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
