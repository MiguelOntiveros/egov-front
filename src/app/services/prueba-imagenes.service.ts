import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaImagenesService {

   private URL = 'http://localhost:8083/contratistadocumentoimagen/unicoregistro';

   private URL2 = 'https://mike-complise.herokuapp.com/contratistadocumentoimagen/unicoregistro';
   constructor(private http: HttpClient) { }
 
   getImagenes(): Observable<any>{
     return this.http.get<any>(this.URL2);
   }
 
}
