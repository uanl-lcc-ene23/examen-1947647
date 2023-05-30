import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css']
})
export class TermComponent  implements OnInit {
  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}