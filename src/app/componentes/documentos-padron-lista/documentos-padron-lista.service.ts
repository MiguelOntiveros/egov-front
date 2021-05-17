import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentosPadronListaService {

  /* URL's para DESARROLLO */
  // private urlListaDocumentosPadron = 'http://localhost:8083/contratodocumentoimagen/documentos?';
  // private urlListaDocumentosPadron = 'http://localhost:8083/contratodocumentoimagen/documentos?';
  // private urlIdsDocDocumentosPadron = 'http://localhost:8083/contratodocumentoimagen/idsdoc';



  /* URL's para PRODUCCION */
  private urlListaDocumentosPadron = 'http://complise.dyndns.org/egov-api/contratodocumentoimagen/documentos?';
  private urlIdsDocDocumentosPadron = 'http://complise.dyndns.org/egov-api/contratodocumentoimagen/idsdoc';

  constructor(
    private http: HttpClient,
  ) { }

  getListaDocumentosPadron(area: string, tipo: string, categoria: string, folio: number, revision: number){
    return this.http.get<any>(this.urlListaDocumentosPadron + 'area=' + area + '&tipo=' +  tipo + '&categoria=' + categoria + '&folio=' + folio + '&revision=' + revision );
  }

  getIdsDocumentosPadron(area, tipo, categoria, folio, revision, documento){
    return this.http.get<any>(this.urlIdsDocDocumentosPadron, {
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
