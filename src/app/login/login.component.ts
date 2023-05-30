import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!: { nombre: string; contraseña: string; };

    constructor(private route: ActivatedRoute){}
    
      ngOnInit(): void{
        this.login={
          nombre: this.route.snapshot.params['nombre'],
          contraseña: this.route.snapshot.params['contraseña']
        }
      }

     
      
}
