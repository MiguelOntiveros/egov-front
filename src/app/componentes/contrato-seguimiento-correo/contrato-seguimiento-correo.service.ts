import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoSeguimientoCorreoService {

  private url = 'https://maikiki.herokuapp.com/contratoseguimientocorreo/todos';

  constructor(private http: HttpClient) { }

  getContratoSeguimientoCorreo(): Observable<any>{
  return this.http.get<any>(this.url);
  }
}
