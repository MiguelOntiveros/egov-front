import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContratosYAnexosListaService {
 
  /* URL's para DESARROLLO */
  // private urlListaContratosAnexos = 'http://localhost:8083/contratoanexoimagen/documentos?';
  // private urlIdsDocContratosAnexos = 'http://localhost:8083/contratoanexoimagen/idsdoc';
  
  /* URL's para PRODUCCIÓN */
  private urlListaContratosAnexos = 'http://complise.dyndns.org/egov-api/contratoanexoimagen/documentos?';
  private urlIdsDocContratosAnexos = 'http://complise.dyndns.org/egov-api/contratoanexoimagen/idsdoc';

 constructor(
   private http: HttpClient,
 ) { }

   getListaContratosAnexos(area: string, tipo: string, categoria: string, folio: number, revision: number){
   return this.http.get<any>(this.urlListaContratosAnexos + 'area=' + area + '&tipo=' +  tipo + '&categoria=' + categoria + '&folio=' + folio + '&revision=' + revision );
   }

  getIdsContratosAnexos(area, tipo, categoria, folio, revision, documento){
  return this.http.get<any>(this.urlIdsDocContratosAnexos, {
    params: {
      area: area,
      tipo: tipo,
      categoria: categoria,
      folio: folio,
      revision: revision,
      documento: documento
    }
  })
  }


}
