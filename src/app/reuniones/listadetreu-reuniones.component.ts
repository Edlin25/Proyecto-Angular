import { Component, OnInit } from '@angular/core';
import { ReunionesService } from '../services/reuniones.service';

@Component({
  selector: 'app-listadetreu-reuniones',
  templateUrl: './listadetreu-reuniones.component.html',
  styleUrls: ['./listadetreu-reuniones.component.css']
})
export class ListadetreuReunionesComponent implements OnInit {

  detReunionesArreglo: any = []

  constructor(
    
    private detReunionesService: ReunionesService
  ) { }

  ngOnInit(): void {
    this.consultarDatos();
  }

  consultarDatos(){
    this.detReunionesService.getDetReunion().subscribe((detreuniones: any) =>{
      console.log(detreuniones);
      this.detReunionesArreglo = detreuniones;
    })
  }

}
