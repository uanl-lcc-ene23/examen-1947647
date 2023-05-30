import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormularoTicketComponent } from './formularo-ticket/formularo-ticket.component';
import { TicketCompraComponent } from './ticket-compra/ticket-compra.component';

import{ provideFirebaseApp, getApp, initializeApp} from '@angular/fire/app';
import{ getFirestore, provideFirestore} from '@angular/fire/firestore';

import{environment} from '../environments/environment.prod';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { LibreriaComponent } from './libreria/libreria.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { PlayingComponent } from './playing/playing.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ContComponent } from './cont/cont.component';
import { TermComponent } from './term/term.component';
import { LogContComponent } from './log-cont/log-cont.component';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { Playlist2Component } from './playlist2/playlist2.component';
import { Playlist3Component } from './playlist3/playlist3.component';
import { CrearComponent } from './crear/crear.component';
import { FirebaseComponent } from './firebase/firebase.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularoTicketComponent,
    TicketCompraComponent,
    InicioComponent,
    LoginComponent,
    PerfilComponent,
    BusquedaComponent,
    LibreriaComponent,
    RegistroComponent,
    RegistrarComponent,
    PlayingComponent,
    PlaylistComponent,
    ContComponent,
    TermComponent,
    LogContComponent,
    Playlist2Component,
    Playlist3Component,
    CrearComponent,
    FirebaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    IonicModule,
    IonicModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent},
      { path: 'perfil', component: PerfilComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { 

}
