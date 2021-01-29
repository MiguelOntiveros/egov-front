import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busquedaPipe',
  pure: false,
})
export class BusquedaRoutePipe implements PipeTransform {
  transform(tipoBusqueda: any[]): any {

    if (!tipoBusqueda) return [];

    tipoBusqueda.forEach((tipo) => {
      switch (tipo.registro) {
        case 0:
          tipo.link = '/obras/:numero';
          break;
        case 1:
          tipo.link = '/adquisiciones/:numero';
          break;
        case 2:
          tipo.link = '/patrimonios/:numero';
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
