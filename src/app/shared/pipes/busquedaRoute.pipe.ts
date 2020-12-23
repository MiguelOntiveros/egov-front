import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busquedaPipe',
  pure: false,
})
export class BusquedaRoutePipe implements PipeTransform {
  transform(tipoBusqueda: any[]): any {

    if (!tipoBusqueda) return [];

    tipoBusqueda.forEach((tipo) => {
      switch (tipo.clasificacion) {
        case 'ADQUISICIONES':
          tipo.link = '/adquisiciones';
          break;
        case 'PATRIMONIO':
          tipo.link = '/patrimonios';
          break;
        case 'OBRAS PÚBLICAS':
          tipo.link = '/obras';
          break;
        case 'NULL':
          tipo.link = '/lista-documentos';
          break;
        default:
          break;
      }
    });

    return tipoBusqueda;
  }
}
