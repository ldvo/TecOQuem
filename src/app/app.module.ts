import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCardModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AcercaComponent} from './acerca/acerca.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EcuacionesComponent} from './ecuaciones/ecuaciones.component';
import {InicioComponent} from './inicio/inicio.component';
import {ReaccionesComponent} from './reacciones/reacciones.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent, InicioComponent, ReaccionesComponent, EcuacionesComponent,
    AcercaComponent
  ],
  imports: [
    MatCardModule, BrowserModule, BrowserAnimationsModule, AppRoutingModule,
    MatToolbarModule, FlexLayoutModule, MatSidenavModule, MatButtonModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Main Angular fire module 
    AngularFireDatabaseModule  // Firebase database module 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
