import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-compra',
  templateUrl: './ticket-compra.component.html',
  styleUrls: ['./ticket-compra.component.css']
})
export class TicketCompraComponent {
  constructor() { }

  articuloTemporal: any = {};

  @Input() Arr: any = [];
  total: number = 0;

  ngOnInit(): void {
    this.calcularTotal();
  }

  agregarAticket() {
    this.Arr.push(this.Arr);
    this.calcularTotal();
  }

  ngOnChanges(): void {
    this.calcularTotal();
  }

  calcularTotal(): void {
    this.total = 0;
    for (let i = 0; i < this.Arr.length; i++) {
      this.total += this.Arr[i].monto;
    }

  }
}
