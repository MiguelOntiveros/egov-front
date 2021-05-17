import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnexosOficialesListaService {


  /* URL's para DESARROLLO */
  // private urlListaAnexosOficiales = 'http://localhost:8083/contratooficialimagen/documentos?'
  // private urlIdsDocAnexosOficiales = 'http://localhost:8083/contratooficialimagen/idsdoc';
  
  /* URL's para PRODUCCIÓN*/
  private urlListaAnexosOficiales = 'http://complise.dyndns.org/egov-api/contratooficialimagen/documentos?'
  private urlIdsDocAnexosOficiales = 'http://complise.dyndns.org/egov-api/contratooficialimagen/idsdoc';

 constructor(
   private http: HttpClient,
 ) { }

 getListaAnexosOficiales(area: string, tipo: string, categoria: string, folio: number, revision: number){
   return this.http.get<any>(this.urlListaAnexosOficiales + 'area=' + area + '&tipo=' +  tipo + '&categoria=' + categoria + '&folio=' + folio + '&revision=' + revision );
 }

 getIdsAnexosOficiales(area, tipo, categoria, folio, revision, documento){
   return this.http.get<any>(this.urlIdsDocAnexosOficiales, {
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
