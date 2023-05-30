import { Component, OnInit } from '@angular/core';  
import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  login: any;
  
  constructor( private route: ActivatedRoute){}
  ngOnInit(): void {
    
  }
  
}
