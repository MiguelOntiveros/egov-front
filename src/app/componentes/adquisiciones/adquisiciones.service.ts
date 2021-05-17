import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdquisicionesService {

  /* URL's de DESARROLLO */
  // private urlGetContratos = 'http://localhost:8083/egov-api/contrato/contratos'

  // private urlGetValorDelMonto = 'http://localhost:8083/contratogeneraldato/valor';

  // private urlGetDescripcionDelContrato = 'http://localhost:8083/contratogeneral/descripcion';

  // private urlLlamarContrato = 'http://localhost:8083/contrato/contrato';

  // private urlObtenerContratoCompleto = 'http://localhost:8083/contrato/contratocompleto';


  /* URL's de PRODUCCIÓN */
  private urlGetContratos = 'http://complise.dyndns.org/egov-api/contrato/contratos'

  private urlGetValorDelMonto = 'http://complise.dyndns.org/egov-api/contratogeneraldato/valor';

  private urlGetDescripcionDelContrato = 'http://complise.dyndns.org/egov-api/contratogeneral/descripcion';

  private urlLlamarContrato = 'http://complise.dyndns.org/egov-api/contrato/contrato';

  private urlObtenerContratoCompleto = 'http://complise.dyndns.org/egov-api/contrato/contratocompleto';

  constructor(private http: HttpClient) { }

  getContratos(numero) {
    return this.http.get<any>(this.urlGetContratos, {
      params: {
        numero: numero
      }
    });
    // http://complise.dyndns.org/egov-api/contrato/contratos
    // http://localhost:8083/contrato/contratos
    // complise.dyndns.org/egov-api
  }

  getValorDelMonto(area,tipo,categoria,folio,revision) {
    return this.http.get<any>(this.urlGetValorDelMonto, {
     // responseType: 'text',
        params: {
        area: area,
        tipo: tipo,
        categoria: categoria,
        folio: folio,
        revision: revision
        }
      });
      // http://complise.dyndns.org/egov-api/contratogeneraldato/valor
      // http://localhost:8083/contratogeneraldato/valor
  }

  getDescripcionDelContrato(tipo,categoria) {
    return this.http.get<any>(this.urlGetDescripcionDelContrato, {
      params: {
        tipo: tipo,
        categoria: categoria
      }
    });
    // http://complise.dyndns.org/egov-api/contratogeneral/descripcion
    // http://localhost:8083/contratogeneral/descripcion
  }

  llamarContrato(id) {
    return this.http.get<any>(this.urlLlamarContrato, {
      params: {
        id: id
      }
    });
    // http://complise.dyndns.org/egov-api/contrato/contrato
    // http://localhost:8083/contrato/contrato
  }

  obtenerContratoCompleto(id) {
    return this.http.get<any>(this.urlObtenerContratoCompleto, {
      params: {
        id: id
      }
    });
    // http://complise.dyndns.org/egov-api/contrato/contratocompleto
    // http://localhost:8083/contrato/contratocompleto
  }

}
