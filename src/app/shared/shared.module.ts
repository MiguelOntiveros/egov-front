import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';

import { BusquedaRoutePipe } from './pipes/busquedaRoute.pipe';


@NgModule({
  declarations: [BusquedaRoutePipe],
  imports: [
  ],
  exports: [BusquedaRoutePipe]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}