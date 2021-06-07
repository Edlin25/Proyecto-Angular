import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReunionesService } from '../services/reuniones.service';

@Component({
  selector: 'app-formulariodetreu-reuniones',
  templateUrl: './formulariodetreu-reuniones.component.html',
  styleUrls: ['./formulariodetreu-reuniones.component.css']
})
export class FormulariodetreuReunionesComponent implements OnInit {

  detreuniones: any = {};

  constructor(
    private detreunionesService: ReunionesService
  ) { }

  ngOnInit(): void {
    
  }

  guardarDetReuniones(fReunion: NgForm){
    this.detreunionesService.saveDetReunion(this.detreuniones).subscribe();


  }

}
