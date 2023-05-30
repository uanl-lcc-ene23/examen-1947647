import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent   implements OnInit{
  constructor(private nav:NavController){}
  
  ngOnInit(): void{

  }


  navToInicio(){
    this.nav.navigateForward('/inicio')
  }
}
