import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Configuraciones de Red / SERVIDORES
import { Red } from './config/red';

// RouterModule
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { SearchbarComponent } from './componentes/searchbar/searchbar.component';
import { ContratistaComponent } from './componentes/contratista/contratista.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { AdquisicionesComponent } from './componentes/adquisiciones/adquisiciones.component';
import { BarraBusquedaComponent } from './componentes/barra-busqueda/barra-busqueda.component';
import { BotonFooterComponent } from './componentes/boton-footer/boton-footer.component';
import { ConfiguracionesComponent } from './componentes/configuraciones/configuraciones.component';
import { DocumentosComponent } from './componentes/documentos/documentos.component';
import { FiltrosComponent } from './componentes/filtros/filtros.component';
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
import { CiudadComponent } from './componentes/ciudad/ciudad.component';
import { TablasComponent } from './componentes/tablas/tablas.component';
import { ConfiguracionWebComponent } from './componentes/configuracion-web/configuracion-web.component';
import { ContratistaDocumentoComponent } from './componentes/contratista-documento/contratista-documento.component';
import { ContratistaPersonaComponent } from './componentes/contratista-persona/contratista-persona.component';
import { ContratistaReferenciaComponent } from './componentes/contratista-referencia/contratista-referencia.component';
import { ContratoAnexoComponent } from './componentes/contrato-anexo/contrato-anexo.component';
import { ContratoAreaComponent } from './componentes/contrato-area/contrato-area.component';
import { ContratoCanceladoComponent } from './componentes/contrato-cancelado/contrato-cancelado.component';
import { ContratoColaboradorComponent } from './componentes/contrato-colaborador/contrato-colaborador.component';
import { ContratoFiltroComponent } from './componentes/contrato-filtro/contrato-filtro.component';
import { ContratoFirmaComponent } from './componentes/contrato-firma/contrato-firma.component';
import { ContratoFuncionarioComponent } from './componentes/contrato-funcionario/contrato-funcionario.component';
import { ContratoFuncionarioDatoComponent } from './componentes/contrato-funcionario-dato/contrato-funcionario-dato.component';
import { ContratistaGiroComponent } from './componentes/contratista-giro/contratista-giro.component';
import { ContratoOficialComponent } from './componentes/contrato-oficial/contrato-oficial.component';
import { ContratoOficioComponent } from './componentes/contrato-oficio/contrato-oficio.component';
import { ContratoReferenciaComponent } from './componentes/contrato-referencia/contrato-referencia.component';
import { ContratoRestauradoComponent } from './componentes/contrato-restaurado/contrato-restaurado.component';
import { ContratoSeguimientoComponent } from './componentes/contrato-seguimiento/contrato-seguimiento.component';
import { ContratoSeguimientoBitacoraComponent } from './componentes/contrato-seguimiento-bitacora/contrato-seguimiento-bitacora.component';
import { ContratoSeguimientoCorreoComponent } from './componentes/contrato-seguimiento-correo/contrato-seguimiento-correo.component';
import { ContratoTipoComponent } from './componentes/contrato-tipo/contrato-tipo.component';
import { FondoComponent } from './componentes/fondo/fondo.component';
import { NotificacionComponent } from './componentes/notificacion/notificacion.component';
import { PaisComponent } from './componentes/pais/pais.component';
import { RequeridoComponent } from './componentes/requerido/requerido.component';
import { SantoralComponent } from './componentes/santoral/santoral.component';
import { SugerenciaComponent } from './componentes/sugerencia/sugerencia.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { UsuarioDepartamentoComponent } from './componentes/usuario-departamento/usuario-departamento.component';
import { UsuarioModuloComponent } from './componentes/usuario-modulo/usuario-modulo.component';
import { EstadoComponent } from './componentes/estado/estado.component';
import { ContratistaSuspendidoComponent } from './componentes/contratista-suspendido/contratista-suspendido.component';
import { ParametrosComponent } from './componentes/parametros/parametros.component';
import { ResultadoBusquedaComponent } from './componentes/resultado-busqueda/resultado-busqueda.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SharedModule } from './shared/shared.module';
import { ImagenesAnexosOficialesComponent } from './componentes/imagenes-anexos-oficiales/imagenes-anexos-oficiales.component';
import { ImagenesAOBasesDeLicitacionComponent } from './componentes/imagenes-a-o-bases-de-licitacion/imagenes-a-o-bases-de-licitacion.component';
import { ImagenesAOProcedimientoDeAdjudicacionComponent } from './componentes/imagenes-a-o-procedimiento-de-adjudicacion/imagenes-a-o-procedimiento-de-adjudicacion.component';
import { ImagenesAOOficioDeOrigenDeLosRecursosComponent } from './componentes/imagenes-a-o-oficio-de-origen-de-los-recursos/imagenes-a-o-oficio-de-origen-de-los-recursos.component';
import { ImagenesAOActaDeFalloComponent } from './componentes/imagenes-a-o-acta-de-fallo/imagenes-a-o-acta-de-fallo.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    ContratistaComponent,
    AcercaDeComponent,
    AdquisicionesComponent,
    BarraBusquedaComponent,
    BotonFooterComponent,
    ConfiguracionesComponent,
    DocumentosComponent,
    FiltrosComponent,
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
    CiudadComponent,
    TablasComponent,
    ConfiguracionWebComponent,
    ContratistaDocumentoComponent,
    ContratistaPersonaComponent,
    ContratistaReferenciaComponent,
    ContratoAnexoComponent,
    ContratoAreaComponent,
    ContratoCanceladoComponent,
    ContratoColaboradorComponent,
    ContratoFiltroComponent,
    ContratoFirmaComponent,
    ContratoFuncionarioComponent,
    ContratoFuncionarioDatoComponent,
    ContratistaGiroComponent,
    ContratoOficialComponent,
    ContratoOficioComponent,
    ContratoReferenciaComponent,
    ContratoRestauradoComponent,
    ContratoSeguimientoComponent,
    ContratoSeguimientoBitacoraComponent,
    ContratoSeguimientoCorreoComponent,
    ContratoTipoComponent,
    FondoComponent,
    NotificacionComponent,
    PaisComponent,
    RequeridoComponent,
    SantoralComponent,
    SugerenciaComponent,
    UsuarioComponent,
    UsuarioDepartamentoComponent,
    UsuarioModuloComponent,
    EstadoComponent,
    ContratistaSuspendidoComponent,
    ParametrosComponent,
    ResultadoBusquedaComponent,
    ImagenesAnexosOficialesComponent,
    ImagenesAOBasesDeLicitacionComponent,
    ImagenesAOProcedimientoDeAdjudicacionComponent,
    ImagenesAOOficioDeOrigenDeLosRecursosComponent,
    ImagenesAOActaDeFalloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    SharedModule
  ],
  providers: [Red],
  bootstrap: [AppComponent]
})
export class AppModule { }
