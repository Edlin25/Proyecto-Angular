import { Component, OnInit } from '@angular/core';
import { MovimientosService } from '../services/movimientos.service';

@Component({
  selector: 'app-lista-movimientos',
  templateUrl: './lista-movimientos.component.html',
  styleUrls: ['./lista-movimientos.component.css']
})
export class ListaMovimientosComponent implements OnInit {

  movimientosArreglo: any = [];    

  constructor(
    private movimientosServices: MovimientosService
  ) { }

  ngOnInit(): void {
    this.consultarDatos();
  }
  consultarDatos() {
    this.movimientosServices.getMovimientos().subscribe((movimientos: any) => {
      console.log(movimientos);
      this.movimientosArreglo = movimientos;
    });
  }

}
