import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ReunionesService {

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });


  
  private URL_API = 'http://localhost:5001/api';
  private header = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private _http:  HttpClient,
    private router: Router
  ) { }

  getReuniones(){
    const url = `${this.URL_API}/reuniones`;

    return this._http.get(url, {headers: this.header}).pipe(
      map((resp: any)=>{
        return resp.reuniones
      }) ,
      catchError((error: any)=>{
        return throwError(error);
      })
    )
  }
  
  saveReunion(reunion: any){
    const url = `${this.URL_API}/reuniones`;
    return this._http.post(url,reunion,{headers: this.header}).pipe(
      map((resp: any) => {
        console.log(resp);
        this.Toast.fire({
          icon: 'success',
          title: 'Reunion agregada'
        });
        this.router.navigate(['/reuniones'])
        
      }),
      catchError((err: any)=>{
        return throwError(err)
      })
    )
  }

  getDetReunion(){
    const url = `${this.URL_API}/reuniones/detalleReunion`;

    return this._http.get(url, {headers: this.header}).pipe(
      map((resp: any)=>{
        return resp.detreuniones
      }) ,
      catchError((error: any)=>{
        return throwError(error);
      })
    )
  }

  saveDetReunion(detreuniones: any){
    const url = `${this.URL_API}/reuniones/detalleReunion`;
    return this._http.post(url,detreuniones,{headers: this.header}).pipe(
      map((resp: any) => {
        console.log(resp);
        this.Toast.fire({
          icon: 'success',
          title: 'Asistencia agregada'
        });
        this.router.navigate(['/reuniones/detalleReunion'])
        
      }),
      catchError((err: any)=>{
        return throwError(err)
      })
    )
  }

  getReunion(id_detReunion: any){
    const url = `${this.URL_API}/reuniones/detalleReunion/${id_detReunion}`;

    return this._http.get(url, {headers: this.header}).pipe(
      map((resp: any)=>{
        console.log(resp)
        return resp.reunion
      }),
      catchError((err: any)=>{
        return throwError(err);
      })
    )
  }

}
