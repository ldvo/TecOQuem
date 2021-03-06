import {DragDropModule} from '@angular/cdk/drag-drop';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
// tslint:disable-next-line:max-line-length
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {environment} from '../environments/environment';

import {AcercaComponent} from './acerca/acerca.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EcuacionesHostComponent} from './ecuaciones/ecuaciones-host/ecuaciones-host.component';
import {EcuacionesComponent} from './ecuaciones/ecuaciones.component';
import {InicioEcuacionesComponent} from './ecuaciones/inicio-ecuaciones/inicio-ecuaciones.component';
import {LandingComponent} from './landing/landing.component';
import {ReaccionesComponent} from './reacciones/reacciones.component';

@NgModule({
  declarations: [
    AppComponent, ReaccionesComponent, EcuacionesComponent, AcercaComponent,
    InicioEcuacionesComponent, EcuacionesHostComponent, LandingComponent
  ],
  imports: [
    FormsModule, MatInputModule, MatFormFieldModule, MatCardModule,
    BrowserModule, BrowserAnimationsModule, AppRoutingModule, MatToolbarModule,
    FlexLayoutModule, MatSidenavModule, MatButtonModule, MatIconModule,
    DragDropModule,
    AngularFireModule.initializeApp(environment.firebase, 'fcc-book-trading'),
    AngularFireDatabaseModule, MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
