import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReunionesService } from '../services/reuniones.service';

@Component({
  selector: 'app-formulario-reuniones',
  templateUrl: './formulario-reuniones.component.html',
  styleUrls: ['./formulario-reuniones.component.css']
})
export class FormularioReunionesComponent implements OnInit {

  reunion: any = {};

  constructor(
    private reunionService : ReunionesService
  ) { }

  ngOnInit(): void {
    this.reunion.id_estatus = 1;
  }

  guardarReunion(fReunion: NgForm){
    this.reunionService.saveReunion(this.reunion).subscribe();


  }

}
