import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatrimoniosService {

  // private urlPatrimonios = 'https://maikiki.herokuapp.com/contrato/patrimonio';
  private urlPatrimonios2 = 'https://maikiki.herokuapp.com/contrato/obraspublicas';


  constructor(private http: HttpClient) { }

  getPatrimonios(): Observable<any>{
    return this.http.get<any>(this.urlPatrimonios2);
  }

}
