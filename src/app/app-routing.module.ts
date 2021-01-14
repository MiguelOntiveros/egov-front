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


const routes: Routes = [
  {path: 'index', component: LoginComponent},
  {path: 'configuraciones', component: ConfiguracionesComponent},
  {path: 'acerca-de', component: AcercaDeComponent},
  {path: 'sugerencias', component: SugerenciasComponent},
  {path: 'terminos', component: TerminosComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'filtros', component: FiltrosComponent},
  {path: 'obras', component: ObrasComponent},
  {path: 'patrimonios', component: PatrimoniosComponent},
  {path: 'adquisiciones', component: AdquisicionesComponent},
  {path: 'documentos/:categoria', component: DocumentosComponent},
  {path: 'lista-documentos', component: ListaDocumentosComponent},
  {path: 'seguimientos', component: SeguimientoComponent},
  {path: 'tablas', component: TablasComponent},
  {path: 'anexos-oficiales', component: ImagenesAnexosOficialesComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
