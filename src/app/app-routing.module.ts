import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracionesComponent } from './componentes/configuraciones/configuraciones.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { SugerenciasComponent } from './componentes/sugerencias/sugerencias.component';
import { TerminosComponent } from './componentes/terminos/terminos.component';
import { LoginComponent } from './componentes/login/login.component';
import { ObrasComponent } from './componentes/obras/obras.component';
import { PatrimoniosComponent } from './componentes/patrimonios/patrimonios.component';
import { DocumentosComponent } from './componentes/documentos/documentos.component';
import { ListaDocumentosComponent } from './componentes/lista-documentos/lista-documentos.component';
import { AdquisicionesComponent } from './componentes/adquisiciones/adquisiciones.component';
import { SeguimientoComponent } from './componentes/seguimiento/seguimiento.component';
// import { DocumentosPadronComponent } from './componentes/documentos-padron/documentos-padron.component';
import { ObrasGeneralesComponent } from './componentes/obras-generales/obras-generales.component';
import { PatrimoniosGeneralesComponent } from './componentes/patrimonios-generales/patrimonios-generales.component';
import { AdquisionesGeneralesComponent } from './componentes/adquisiones-generales/adquisiones-generales.component';
import { DocumentosFiltrosComponent } from './componentes/documentos-filtros/documentos-filtros.component';
import { DocumentosPadronFiltrosComponent } from './componentes/documentos-padron-filtros/documentos-padron-filtros.component';
import { DocumentosPadronListaComponent } from './componentes/documentos-padron-lista/documentos-padron-lista.component';
import { DocumentosPadronTodoComponent } from './componentes/documentos-padron-todo/documentos-padron-todo.component';
import { AnexosOficialesListaComponent } from './componentes/anexos-oficiales-lista/anexos-oficiales-lista.component';
import { AnexosOficialesTodoComponent } from './componentes/anexos-oficiales-todo/anexos-oficiales-todo.component';
import { ContratosYAnexosListaComponent } from './componentes/contratos-y-anexos-lista/contratos-y-anexos-lista.component';
import { ContratosYAnexosTodoComponent } from './componentes/contratos-y-anexos-todo/contratos-y-anexos-todo.component';
import { DatosDelDocumentoComponent } from './componentes/datos-del-documento/datos-del-documento.component';
import { AnexosOficialesImagenComponent } from './componentes/anexos-oficiales-imagen/anexos-oficiales-imagen.component';
import { ContratosYAnexosImagenComponent } from './componentes/contratos-y-anexos-imagen/contratos-y-anexos-imagen.component';
import { DocumentosPadronImagenComponent } from './componentes/documentos-padron-imagen/documentos-padron-imagen.component';
import { FiltrosComponent } from './componentes/filtros/filtros.component';

const routes: Routes = [
  { path: 'index', component: LoginComponent },
  { path: 'configuraciones', component: ConfiguracionesComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'sugerencias', component: SugerenciasComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'filtros', component: FiltrosComponent },
  { path: 'obras/:numero', component: ObrasComponent },
  { path: 'obras-generales', component: ObrasGeneralesComponent },
  { path: 'patrimonios/:numero', component: PatrimoniosComponent },
  { path: 'patrimonios-generales', component: PatrimoniosGeneralesComponent },
  { path: 'adquisiciones/:numero', component: AdquisicionesComponent },
  { path: 'adquisiciones-generales', component: AdquisionesGeneralesComponent },
  { path: 'documentos', component: DocumentosComponent },
  { path: 'lista-documentos', component: ListaDocumentosComponent },
  { path: 'seguimientos', component: SeguimientoComponent },
  

  // DOCUMENTOS FILTROS
  { path: 'documentos-filtros', component: DocumentosFiltrosComponent },
  // { path: 'documentos-padron-filtros', component: DocumentosPadronFiltrosComponent},

  // DOCUMENTOS O INFORMACION FICHA TECNICA
  // { path: 'ficha-tecnica', component: FichaTecnicaComponent },
  { path: 'datos-del-documento', component: DatosDelDocumentoComponent},
  
  // DOCUMENTOS PADRON IMAGENES Y LISTA
  { path: 'documentos-padron-lista', component: DocumentosPadronListaComponent},
  { path: 'documentos-padron-todo', component: DocumentosPadronTodoComponent},
  { path: 'documentos-padron-imagen', component: DocumentosPadronImagenComponent},
  
  // ANEXOS OFICIALES IMAGENES Y LISTA
  { path: 'anexos-oficiales-lista', component: AnexosOficialesListaComponent},
  { path: 'anexos-oficiales-todo', component: AnexosOficialesTodoComponent},
  { path: 'anexos-oficiales-imagen', component: AnexosOficialesImagenComponent},

  // CONTRATOS Y ANEXOS IMAGENES Y LISTA
  { path: 'contratos-y-anexos-lista', component: ContratosYAnexosListaComponent},
  { path: 'contratos-y-anexos-todo', component: ContratosYAnexosTodoComponent},
  { path: 'contratos-y-anexos-imagen', component: ContratosYAnexosImagenComponent},


  { path: '**', pathMatch: 'full', redirectTo: '/index' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
