import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeguimientoService {
  
   /* URL's de DESARROLLO */
   //  private urlSeguimientoFecha = 'http://localhost:8083/contratoseguimientocorreo/fecha?';
   //  private urlSeguimientoHora = 'http://localhost:8083/contratoseguimientocorreo/hora?';
   //  private urlSeguimientoObservaciones = 'http://localhost:8083/contratoanexoimagen/observaciones?';
  //  private urlSeguimientoResponsable = 'http://localhost:8083/contratoseguimientocorreo/responsable?';
  //  private urlGetInformacionSeguimiento = 'http://localhost:8083/contratoanexoimagen/observaciones?';
  //  private urlGetImagenesSeguimiento = 'http://localhost:8083/contratoanexoimagen/idsseg?'

  
  // private urlSeguimientoHora = 'http://localhost:8083/contratoseguimientocorreo/hora?  area=A1&tipo=CO&categoria=OP&folio=2&revision=1';

 
  // private urlListaAnexosOficiales = 'http://localhost:8083/contratooficialimagen/documentos?'
   

 
   /* ULR's de PRODUCCION */

   private urlSeguimientoResponsable = 'http://complise.dyndns.org/egov-api/contratoseguimientocorreo/responsable?';
   private urlGetInformacionSeguimiento = 'http://complise.dyndns.org/egov-api/contratoanexoimagen/observaciones?';
   private urlGetImagenesSeguimiento = 'http://complise.dyndns.org/egov-api/contratoanexoimagen/idsseg?'

  //  private urlSeguimientoHora = 'http://complise.dyndns.org/egov-api/contratoseguimientocorreo/hora?';
  //  private urlSeguimientoFecha = 'http://complise.dyndns.org/egov-api/contratoseguimientocorreo/fecha?';
  //  private urlSeguimientoResponsable = 'http://complise.dyndns.org/egov-api/contratoseguimientocorreo/responsable?';

  constructor(private http: HttpClient) { }

  getResponsable(area, tipo, categoria, folio, revision){
  return this.http.get<any>(this.urlSeguimientoResponsable, {
    params: {
      area: area,
      tipo: tipo,
      categoria: categoria,
      folio: folio,
      revision: revision
    }
  })
  }

  
  // getFecha(area, tipo, categoria, folio, revision){
  //   return this.http.get<any>(this.urlSeguimientoFecha, {
  //     params: {
  //       area: area,
  //       tipo: tipo,
  //       categoria: categoria,
  //       folio: folio,
  //       revision: revision
  //     }
  //   });
  // }
  
  // getHora(area, tipo, categoria, folio, revision){
  //     return this.http.get<any>(this.urlSeguimientoHora, {
  //       params: {
  //       area: area,
  //       tipo: tipo,
  //       categoria: categoria,
  //       folio: folio,
  //       revision: revision
  //     }
  //   })
  // }

  // getObservaciones(area, tipo, categoria, folio, revision){
  //   return this.http.get<any>(this.urlSeguimientoObservaciones, {
  //     params: {
  //     area: area,
  //     tipo: tipo,
  //     categoria: categoria,
  //     folio: folio,
  //     revision: revision
  //     }
  //   })
  // }

  getInformacionSeguimiento(area, tipo, categoria, folio, revision){
  return this.http.get<any>(this.urlGetInformacionSeguimiento, {
    params: {
      area: area,
      tipo: tipo,
      categoria: categoria,
      folio: folio,
      revision: revision
    }
  });
  }

  getImagenesSeguimiento(area, tipo, categoria, folio, revision){
  return this.http.get<any>(this.urlGetImagenesSeguimiento, {
    params: {
      area: area,
      tipo: tipo,
      categoria: categoria,
      folio: folio,
      revision: revision
    }
  })
  }

  

}
