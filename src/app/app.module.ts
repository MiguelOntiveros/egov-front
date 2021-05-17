import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";

// Configuraciones de Red / SERVIDORES
// import { Red } from './config/red';

// RouterModule
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { AdquisicionesComponent } from './componentes/adquisiciones/adquisiciones.component';
import { BotonFooterComponent } from './componentes/boton-footer/boton-footer.component';
import { ConfiguracionesComponent } from './componentes/configuraciones/configuraciones.component';
import { DocumentosComponent } from './componentes/documentos/documentos.component';
// import { FiltrosComponent } from './componentes/filtros/filtros.component';
import { HeaderTituloComponent } from './componentes/header-titulo/header-titulo.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListaDocumentosComponent } from './componentes/lista-documentos/lista-documentos.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ObrasComponent } from './componentes/obras/obras.component';
import { PatrimoniosComponent } from './componentes/patrimonios/patrimonios.component';
import { SeguimientoComponent } from './componentes/seguimiento/seguimiento.component';
import { SugerenciasComponent } from './componentes/sugerencias/sugerencias.component';
import { TerminosComponent } from './componentes/terminos/terminos.component';

import { DocumentosPadronComponent } from './componentes/documentos-padron/documentos-padron.component';

import { ObrasGeneralesComponent } from './componentes/obras-generales/obras-generales.component';
import { PatrimoniosGeneralesComponent } from './componentes/patrimonios-generales/patrimonios-generales.component';
import { AdquisionesGeneralesComponent } from './componentes/adquisiones-generales/adquisiones-generales.component';
import { DocumentosFiltrosComponent } from './componentes/documentos-filtros/documentos-filtros.component';
import { DocumentosPadronFiltrosComponent } from './componentes/documentos-padron-filtros/documentos-padron-filtros.component';


import { SharedModule } from './shared/shared.module';
import { DocumentosPadronListaComponent } from './componentes/documentos-padron-lista/documentos-padron-lista.component';
import { DocumentosPadronTodoComponent } from './componentes/documentos-padron-todo/documentos-padron-todo.component';
import { AnexosOficialesListaComponent } from './componentes/anexos-oficiales-lista/anexos-oficiales-lista.component';
import { AnexosOficialesTodoComponent } from './componentes/anexos-oficiales-todo/anexos-oficiales-todo.component';
import { ContratosYAnexosTodoComponent } from './componentes/contratos-y-anexos-todo/contratos-y-anexos-todo.component';
import { ContratosYAnexosListaComponent } from './componentes/contratos-y-anexos-lista/contratos-y-anexos-lista.component';
import { DatosDelDocumentoComponent } from './componentes/datos-del-documento/datos-del-documento.component';
import { AnexosOficialesImagenComponent } from './componentes/anexos-oficiales-imagen/anexos-oficiales-imagen.component';
import { ContratosYAnexosImagenComponent } from './componentes/contratos-y-anexos-imagen/contratos-y-anexos-imagen.component';
import { DocumentosPadronImagenComponent } from './componentes/documentos-padron-imagen/documentos-padron-imagen.component';
import { FiltrosComponent } from './componentes/filtros/filtros.component';


@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    AdquisicionesComponent,
    BotonFooterComponent,
    ConfiguracionesComponent,
    DocumentosComponent,
    // FiltrosComponent,
    HeaderTituloComponent,
    InicioComponent,
    ListaDocumentosComponent,
    LoginComponent,
    MenuComponent,
    ObrasComponent,
    PatrimoniosComponent,
    SeguimientoComponent,
    SugerenciasComponent,
    TerminosComponent,
    DocumentosPadronComponent,
    ObrasGeneralesComponent,
    PatrimoniosGeneralesComponent,
    AdquisionesGeneralesComponent,
    DocumentosFiltrosComponent,
    DocumentosPadronFiltrosComponent,
    DocumentosPadronListaComponent,
    DocumentosPadronTodoComponent,
    AnexosOficialesListaComponent,
    AnexosOficialesTodoComponent,
    ContratosYAnexosListaComponent,
    ContratosYAnexosTodoComponent,
    DatosDelDocumentoComponent,
    AnexosOficialesImagenComponent,
    ContratosYAnexosImagenComponent,
    DocumentosPadronImagenComponent,
    FiltrosComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    SharedModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
