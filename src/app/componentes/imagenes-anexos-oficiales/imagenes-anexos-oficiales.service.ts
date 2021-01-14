import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenesAnexosOficialesService {

  constructor(private http: HttpClient) { }

  getDocumentos(area, tipo, categoria, folio, revision): Observable<any>{
    return this.http.get<any>('http://localhost:8083/contratooficialimagen/documentos', {
      params: {
        area: area,
        tipo: tipo,
        categoria: categoria,
        folio: folio,
        revision: revision
      }
    });
  }

  
}
