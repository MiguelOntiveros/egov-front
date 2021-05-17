import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosDelDocumentoService {

  // URL's para DESARROLLO
  private urlContratoDocumentoDato = 'http://localhost:8083/contratodocumentodato/documentosdatos?';

  //URL's para PRODUCCIÓN
  // private urlContratoDocumentoDato = 'http://localhost:8083/contratodocumentodato/documentosdatos?area=A1&tipo=CO&categoria=OP&folio=50';

  constructor(private http: HttpClient) { }

  getDatosDelDocumento(area, tipo, categoria, folio){
    return this.http.get<any>(this.urlContratoDocumentoDato, {
      params: {
        area: area,
        tipo: tipo,
        categoria: categoria,
        folio: folio,
      }
    });
  }
}
