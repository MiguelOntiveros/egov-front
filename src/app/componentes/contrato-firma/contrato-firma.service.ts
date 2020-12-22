import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoFirmaService {

  private url = 'https://maikiki.herokuapp.com/contratofirma/todos';

  constructor(private http: HttpClient) { }

  getContratoFirma(): Observable<any>{
    return this.http.get<any>(this.url);
  }

}
