import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';

import { BusquedaRoutePipe } from './pipes/busquedaRoute.pipe';
import { DocumentosContratoAnexoImagenPipe } from './pipes/documentosContratoAnexoImagen.pipe';
import { DocumentosPadronPipe } from './pipes/documentosPadron.pipe';

@NgModule({
  declarations: [BusquedaRoutePipe, DocumentosContratoAnexoImagenPipe, DocumentosPadronPipe],
  imports: [
  ],
  exports: [BusquedaRoutePipe, DocumentosContratoAnexoImagenPipe, DocumentosPadronPipe]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}