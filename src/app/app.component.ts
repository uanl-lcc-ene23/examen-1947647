import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

interface Item{
  nombre:string,
  contraseña:string
}
interface Item{
  nombre:string,
  contraseña: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item$: Observable<Item[]> | undefined;
  firestore: Firestore = inject(Firestore);
   
  constructor(){
    const itemCollection = collection(this.firestore, 'items');

  }
}
