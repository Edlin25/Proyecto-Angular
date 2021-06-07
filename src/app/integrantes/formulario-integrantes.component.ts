import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IntegrantesService } from '../services/integrantes.service';

@Component({
  selector: 'app-formulario-integrantes',
  templateUrl: './formulario-integrantes.component.html',
  styleUrls: ['./formulario-integrantes.component.css']
})
export class FormularioIntegrantesComponent implements OnInit {

  integrante: any = {};
  
  constructor(
    private integranteService: IntegrantesService
  ) { }

  ngOnInit(): void {
  }

  guardarIntegrante(fIntegrante: NgForm){
    this.integranteService.saveIntegrante(this.integrante).subscribe();
    
   } 
}
