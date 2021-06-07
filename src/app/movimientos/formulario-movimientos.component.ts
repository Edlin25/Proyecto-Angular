import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovimientosService } from '../services/movimientos.service';

@Component({
  selector: 'app-formulario-movimientos',
  templateUrl: './formulario-movimientos.component.html',
  styleUrls: ['./formulario-movimientos.component.css']
})
export class FormularioMovimientosComponent implements OnInit {

  movimiento: any = {};

  constructor(
    private movimientoService: MovimientosService
  ) { }

  ngOnInit(): void {
    this.movimiento.id_estatus = 3;
  }

  guardarMovimiento(fIntegrante: NgForm){
    this.movimientoService.saveMovimiento(this.movimiento).subscribe();
    
   } 

}
