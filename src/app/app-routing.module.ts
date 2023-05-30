import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { path } from '@angular-devkit/core';
import { PerfilComponent } from './perfil/perfil.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { LibreriaComponent } from './libreria/libreria.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { PlayingComponent } from './playing/playing.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ComponentFixture } from '@angular/core/testing';
import { ContComponent } from './cont/cont.component';
import { TermComponent } from './term/term.component';
import { LogContComponent } from './log-cont/log-cont.component';
import { Playlist2Component } from './playlist2/playlist2.component';
import { Playlist3Component } from './playlist3/playlist3.component';
import { CrearComponent } from './crear/crear.component';

const routes: Routes = [{
  path:'inicio',
  component: InicioComponent
},
{
  path:'login',
  component: LoginComponent
},
{
  path:'perfil',
  component: PerfilComponent
},
{
  path: 'buscar',
  component: BusquedaComponent
},
{
  path:'libreria',
  component: LibreriaComponent
},
{
  path:'',
  redirectTo: 'registro',
  pathMatch: 'full'
},
{
  path:'registro',
  component: RegistroComponent
},

{
  path: "playing",
  component: PlayingComponent
},
{
  path: "playlist",
  component: PlaylistComponent
},
{
  path: "contraseña",
  component: ContComponent
},
{
  path:"nombre",
  component: TermComponent
},
{
  path:"LoginContraseña",
  component: LogContComponent
},
{
  path:"playlist2",
  component: Playlist2Component
},
{
  path: "playlist3",
  component: Playlist3Component
},
{
  path:"crear",
  component: CrearComponent
},
{
  path:"registrarse",
  component: RegistrarComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
