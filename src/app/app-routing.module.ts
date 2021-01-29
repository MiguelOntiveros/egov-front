import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracionesComponent } from './componentes/configuraciones/configuraciones.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { SugerenciasComponent } from './componentes/sugerencias/sugerencias.component';
import { TerminosComponent } from './componentes/terminos/terminos.component';
import { LoginComponent } from './componentes/login/login.component';
import { FiltrosComponent } from './componentes/filtros/filtros.component';
import { ObrasComponent } from './componentes/obras/obras.component';
import { PatrimoniosComponent } from './componentes/patrimonios/patrimonios.component';
import { DocumentosComponent } from './componentes/documentos/documentos.component';
import { ListaDocumentosComponent } from './componentes/lista-documentos/lista-documentos.component';
import { TablasComponent } from './componentes/tablas/tablas.component';
import { AdquisicionesComponent } from './componentes/adquisiciones/adquisiciones.component';
import { SeguimientoComponent } from './componentes/seguimiento/seguimiento.component';
import { ImagenesAnexosOficialesComponent } from './componentes/imagenes-anexos-oficiales/imagenes-anexos-oficiales.component';
import { ImagenesAOBasesDeLicitacionComponent } from './componentes/imagenes-a-o-bases-de-licitacion/imagenes-a-o-bases-de-licitacion.component';
import { ImagenesAOProcedimientoDeAdjudicacionComponent } from './componentes/imagenes-a-o-procedimiento-de-adjudicacion/imagenes-a-o-procedimiento-de-adjudicacion.component';
import { ImagenesAOOficioDeOrigenDeLosRecursosComponent } from './componentes/imagenes-a-o-oficio-de-origen-de-los-recursos/imagenes-a-o-oficio-de-origen-de-los-recursos.component';
import { ImagenesAOActaDeFalloComponent } from './componentes/imagenes-a-o-acta-de-fallo/imagenes-a-o-acta-de-fallo.component';
import { DocumentosPadronComponent } from './componentes/documentos-padron/documentos-padron.component';
import { FichaTecnicaComponent } from './componentes/ficha-tecnica/ficha-tecnica.component';
import { ImagenesContratosYAnexosComponent } from './componentes/imagenes-contratos-y-anexos/imagenes-contratos-y-anexos.component';
import { ImagenesCAQrComponent } from './componentes/imagenes-c-a-qr/imagenes-c-a-qr.component';
import { ImagenesCASeguimiento1Component } from './componentes/imagenes-c-a-seguimiento1/imagenes-c-a-seguimiento1.component';
import { ImagenesDPActaConstitutivaComponent } from './componentes/imagenes-d-p-acta-constitutiva/imagenes-d-p-acta-constitutiva.component';
import { ImagenesDPAltaHaciendaComponent } from './componentes/imagenes-d-p-alta-hacienda/imagenes-d-p-alta-hacienda.component';
import { ImagenesDPComprobanteDomicilioComponent } from './componentes/imagenes-d-p-comprobante-domicilio/imagenes-d-p-comprobante-domicilio.component';
import { ImagenesDPUbicacionDomicilioComponent } from './componentes/imagenes-d-p-ubicacion-domicilio/imagenes-d-p-ubicacion-domicilio.component';
import { ImagenesDPIdentificacionOficialComponent } from './componentes/imagenes-d-p-identificacion-oficial/imagenes-d-p-identificacion-oficial.component';
import { ImagenesDPPoderLegalComponent } from './componentes/imagenes-d-p-poder-legal/imagenes-d-p-poder-legal.component';

const routes: Routes = [
  {path: 'index', component: LoginComponent},
  {path: 'configuraciones', component: ConfiguracionesComponent},
  {path: 'acerca-de', component: AcercaDeComponent},
  {path: 'sugerencias', component: SugerenciasComponent},
  {path: 'terminos', component: TerminosComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'filtros', component: FiltrosComponent},
  {path: 'obras/:numero', component: ObrasComponent},
  {path: 'patrimonios/:numero', component: PatrimoniosComponent},
  {path: 'adquisiciones/:numero', component: AdquisicionesComponent},
  {path: 'documentos', component: DocumentosComponent},
  {path: 'lista-documentos', component: ListaDocumentosComponent},
  {path: 'seguimientos', component: SeguimientoComponent},
  {path: 'tablas', component: TablasComponent},
  {path: 'anexos-oficiales', component: ImagenesAnexosOficialesComponent},
  {path: 'imagenes-a-o-bases-de-licitacion', component: ImagenesAOBasesDeLicitacionComponent},
  {path: 'imagenes-a-o-procedimiento-de-adjudicacion', component: ImagenesAOProcedimientoDeAdjudicacionComponent},
  {path: 'imagenes-a-o-oficio-de-origen-de-los-recursos', component: ImagenesAOOficioDeOrigenDeLosRecursosComponent},
  {path: 'imagenes-a-o-acta-de-fallo', component: ImagenesAOActaDeFalloComponent},
  {path: 'documentos-padron', component: DocumentosPadronComponent},
  {path: 'ficha-tecnica', component: FichaTecnicaComponent},
  {path: 'imagenes-contratos-y-anexos', component: ImagenesContratosYAnexosComponent},
  {path: 'imagenes-c-a-qr', component: ImagenesCAQrComponent},
  {path: 'imagenes-c-a-seguimiento1', component: ImagenesCASeguimiento1Component},
  {path: 'imagenes-a-o-acta-de-fallo', component: ImagenesAOActaDeFalloComponent},
  {path: 'imagenes-d-p-acta-constitutiva', component: ImagenesDPActaConstitutivaComponent},
  {path: 'imagenes-d-p-alta-hacienda', component: ImagenesDPAltaHaciendaComponent},
  {path: 'imagenes-d-p-comprobante-domicilio', component: ImagenesDPComprobanteDomicilioComponent},
  {path: 'imagenes-d-p-ubicacion-domicilio', component: ImagenesDPUbicacionDomicilioComponent},
  {path: 'imagenes-d-p-identificacion-oficial', component: ImagenesDPIdentificacionOficialComponent},
  {path: 'imagenes-d-p-poder-legal', component: ImagenesDPPoderLegalComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
