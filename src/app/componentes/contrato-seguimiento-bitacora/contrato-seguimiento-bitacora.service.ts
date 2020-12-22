import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoSeguimientoBitacoraService {

  private url = 'https://maikiki.herokuapp.com/contratoseguimientobitacora/todos';

  constructor(private http: HttpClient) { }

  getContratoSeguimientoBitacora(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}
