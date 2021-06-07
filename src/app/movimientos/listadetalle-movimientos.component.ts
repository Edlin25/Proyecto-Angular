import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovimientosService } from '../services/movimientos.service';

@Component({
  selector: 'app-listadetalle-movimientos',
  templateUrl: './listadetalle-movimientos.component.html',
  styleUrls: ['./listadetalle-movimientos.component.css']
})
export class ListadetalleMovimientosComponent implements OnInit {

  movimiento: any = {};

  constructor(
    private movimientosEspeService: MovimientosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      const id = params['id'];
      this.consultarMovimiento(id);
    });
  }

  consultarMovimiento(id: any){
    this.movimientosEspeService.getMovimiento(id).subscribe((movimiento: any) => {;
      this.movimiento = movimiento;
    });
  }

}
