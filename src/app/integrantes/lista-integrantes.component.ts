import { Component, OnInit } from '@angular/core';
import { IntegrantesService } from '../services/integrantes.service';

@Component({
  selector: 'app-lista-integrantes',
  templateUrl: './lista-integrantes.component.html',
  styleUrls: ['./lista-integrantes.component.css']
})
export class ListaIntegrantesComponent implements OnInit {

  integrantesArreglo: any = [];

  constructor(
    private integrantesService: IntegrantesService
  ) { }

  ngOnInit(): void {
    
    this.consultarDatos();
  }
  
  consultarDatos(){
    this.integrantesService.getIntegrantes().subscribe((integrantes: any)=>{
      console.log(integrantes);
      this.integrantesArreglo = integrantes;
    });
}

}
