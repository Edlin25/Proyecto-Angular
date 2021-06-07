import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReunionesService } from '../services/reuniones.service';

@Component({
  selector: 'app-listadetalle-reuniones',
  templateUrl: './listadetalle-reuniones.component.html',
  styleUrls: ['./listadetalle-reuniones.component.css']
})
export class ListadetalleReunionesComponent implements OnInit {

  reunion: any = {};

  constructor(

    private reunionesEspe: ReunionesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params =>{
      const id = params['id'];
      this.consultarReunion(id);
    });
  }

  consultarReunion(id: any){
    this.reunionesEspe.getReunion(id).subscribe((reunion: any) =>{
      console.log(reunion);
      this.reunion = reunion;
    })
  }
}
