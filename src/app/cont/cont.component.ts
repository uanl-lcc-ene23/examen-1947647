import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cont',
  templateUrl: './cont.component.html',
  styleUrls: ['./cont.component.css']
})
export class ContComponent  implements OnInit {
  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
