import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TerminosService {

  // private urlWhatsApp = 'https://api.whatsapp.com/'

  constructor(private http: HttpClient) { }
  
  // enviarWhatsApp(){
  //   return this.http.
  // }

}
