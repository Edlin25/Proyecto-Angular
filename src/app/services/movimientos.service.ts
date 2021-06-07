import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

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


  getReuniones() {
    throw new Error('Method not implemented.');
  }

  private URL_API = 'http://localhost:5001/api';
  private header = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(

    private _http: HttpClient,
    private router: Router
  ) { }

  getMovimientos(){
    const url = `${this.URL_API}/movimientos`;
    
    return this._http.get(url, {headers: this.header}).pipe(
      map((resp: any)=>{
        return resp.movimientos
      }),
      catchError((error: any) =>{
        return throwError(error);
      })
    )
  }

  saveMovimiento(movimiento: any){
    const url = `${this.URL_API}/movimientos`;
    return this._http.post(url,movimiento,{headers: this.header}).pipe(
      map((resp: any) => {
        console.log(resp);
        this.Toast.fire({
          icon: 'success',
          title: 'Movimiento agregado'
        });
        this.router.navigate(['/movimientos'])
        
      }),
      catchError((err: any)=>{
        return throwError(err)
      })
    )
  }

  getMovimiento(id_mov: any){
    const url = `${this.URL_API}/movimientos/${id_mov}`;

    return this._http.get(url, {headers: this.header}).pipe(
      map((resp: any) =>{
        console.log(resp);
        return resp.movimiento
      }),
      catchError((err: any) =>{
        return throwError(err);
        
      })
    )
  }

}
