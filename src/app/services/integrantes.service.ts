
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { Router } from '@angular/router';


import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class IntegrantesService {

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
    private _http: HttpClient,
    private router: Router
  ) { }
  
  getIntegrantes(){
    const url = `${this.URL_API}/integrantes`;

    return this._http.get(url, {headers: this.header}).pipe(
      map((resp: any) =>{
        console.log(resp.integrantes);
        return resp.integrantes

      }),
      catchError((error: any) =>{
        return throwError(error);
        
      })
    )
  }
  saveIntegrante(integrante: any){
    const url = `${this.URL_API}/integrantes`;
    return this._http.post(url,integrante,{headers: this.header}).pipe(
      map((resp: any) => {
        console.log(resp);
        this.Toast.fire({
          icon: 'success',
          title: 'Integrante agregado'
        });
        this.router.navigate(['/integrantes'])
        
      }),
      catchError((err: any)=>{
        return throwError(err)
      })
    )
  }

  getIntegrante(id_integrante: any){
    const url = `${this.URL_API}/integrantes/${id_integrante}`;

    return this._http.get(url, {headers: this.header}).pipe(
      map((resp: any) =>{
        console.log(resp);
        return resp.integrante
      }),
      catchError((err: any) =>{
        return throwError(err);
        
      })
    )
  }
}
