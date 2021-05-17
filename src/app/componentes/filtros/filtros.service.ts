import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import Swal from 'sweetalert2';
// import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Red } from 'src/app/config/red';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  localhost: string;
  /* URL's para DESARROLLO */
  private urlFiltrarResultados = 'http://localhost:8083/contratogeneraldato/superfiltro/?';
  private urlLlamarContrato = 'http://localhost:8083/contrato/contrato';
  private urlLlamarContratoId = 'http://localhost:8083/contrato/idcontrato';

  /* URL's para PRODUCCIÓN */
  
  // private urlFiltrarResultados = 'http://complise.dyndns.org/egov-api/contratogeneraldato/superfiltro/?';
  // private urlLlamarContrato = 'http://complise.dyndns.org/egov-api/contrato/contrato';
  // private urlLlamarContratoId = 'http://complise.dyndns.org/egov-api/contrato/idcontrato';
  

  constructor(private http: HttpClient) { }

  getFiltrarResultados(fechai, fechaf, valori, valorf, tr, so, td, rep, des, campo, cat, orden){
  // getFiltrarResultados(fechai: string, fechaf: string, valori: number, valorf: number, ctas: boolean, so: boolean, ctos: boolean, rep: boolean, des: boolean, campo: string, cat: boolean, prov: boolean, orden: boolean){
    // return this.http.get<any>(this.urlFiltrarResultados + 'fechai=' + fechai + '&fechaf=' + fechaf + '&valori=' + valori + '&valorf=' + valorf + '&ctas=' + ctas + '&so=' + so + '&ctos=' + ctos + '&rep=' + rep + '&des=' + des + '&campo=' + campo + '&cat=' + cat + '&prov=' + prov + '&orden=' + orden).pipe(
    return this.http.get<any>(this.urlFiltrarResultados,  {
      params: {
        fechai: fechai,
        fechaf: fechaf,
        valori: valori,
        valorf: valorf,
        tr: tr,
        so: so,
        td: td,
        rep: rep,
        des: des,
        campo: campo,
        cat: cat,
        orden: orden
      }
    }).pipe(
      // catchError(e => {
      //   if( e.status === 400){
      //     console.log(e.status);
      //     console.log('Error al obtener la lista de resultados, filtros seleccionados incorrectamente');
      //     Swal.fire('ok', 'Error al obtener los resultados', 'error');
      //     return throwError(e);

      //   }
      // })
    )
  }

  // getFechaPrueba(fechai: string){
  //   return this.http.get<any>('http://localhost:8083/contratogeneraldato/superfiltro/?fechai=' + fechai + '&fechaf=2021/07/27&valori=1500000&&valorf=550000000&ctas=false&so=false&ctos=false&rep=false&des=false&orden=false&campo=M%26M&cat=false&prov=true')
  // }

  // getFechaPrueba(): Observable<any>{
  //   return this.http.get<any>('http://localhost:8083/contratogeneraldato/superfiltro/?fechai=2014/04/14&fechaf=2021/07/27&valori=1500000&valorf=550000000&ctas=false&so=false&ctos=false&rep=false&des=false&orden=false&campo=M&M&cat=false&prov=true').pipe(
      
  //   );
  // }

  getLlamarContrato(id) {
    return this.http.get<any>(this.urlLlamarContrato, {
      params: {
        id: id
      }
    });
    //http://localhost:8083/contrato/contrato
  }

  getLlamarContratoId(area, tipo, categoria, folio, revision){
    return this.http.get<any>(this.urlLlamarContratoId, {
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

