import { Component, OnInit } from '@angular/core';
import { ReunionesService } from '../services/reuniones.service';

@Component({
  selector: 'app-lista-reuniones',
  templateUrl: './lista-reuniones.component.html',
  styleUrls: ['./lista-reuniones.component.css']
})
export class ListaReunionesComponent implements OnInit {

  reunionesArreglo: any = [];  

  constructor(
    private reunionesServices: ReunionesService
  ) { }

  ngOnInit(): void {
    this.consultarDatos();
  }

  consultarDatos(){
    this.reunionesServices.getReuniones().subscribe((reuniones: any) => {
      console.log(reuniones);
      this.reunionesArreglo = reuniones;
    });
  }

}
