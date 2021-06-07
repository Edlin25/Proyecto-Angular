import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IntegrantesService } from '../services/integrantes.service';

@Component({
  selector: 'app-listadetalle-integrantes',
  templateUrl: './listadetalle-integrantes.component.html',
  styleUrls: ['./listadetalle-integrantes.component.css']
})
export class ListadetalleIntegrantesComponent implements OnInit {
  
  integrante: any = {};

  constructor(
    private integrantesespeService: IntegrantesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params =>{
      const id = params['id'];
      this.consultarIntegrante(id);
    });


  }
  
  consultarIntegrante(id: any){
    this.integrantesespeService.getIntegrante(id).subscribe((integrante: any)=>{
      this.integrante = integrante;
    });
}

}
