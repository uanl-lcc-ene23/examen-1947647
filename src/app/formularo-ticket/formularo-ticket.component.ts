import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-formularo-ticket',
  templateUrl: './formularo-ticket.component.html',
  styleUrls: ['./formularo-ticket.component.css']
})
export class FormularoTicketComponent {

  constructor() { }

  @Output() total: number = 0;
  monto: number = 0;
  articulo: string = "";

  @Output() articuloTicket: string = "";

  articulosArreglo: any = [];

  agregarAticket(articulo: string, mon: number) {
    let articuloTemporal = {
      monto: mon,
      articulo: articulo
    }
    this.articulosArreglo.push(articuloTemporal);
  }

  ngOnInit(): void {
  }
}
