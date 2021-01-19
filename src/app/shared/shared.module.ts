import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';

import { BusquedaRoutePipe } from './pipes/busquedaRoute.pipe';
import { DocumentosContratoAnexoImagenPipe } from './pipes/documentosContratoAnexoImagen.pipe';

@NgModule({
  declarations: [BusquedaRoutePipe, DocumentosContratoAnexoImagenPipe],
  imports: [
  ],
  exports: [BusquedaRoutePipe, DocumentosContratoAnexoImagenPipe]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}