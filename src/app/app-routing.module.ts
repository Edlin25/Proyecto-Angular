import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonesInicioComponent } from './inicio/botones-inicio.component';
import { FormularioIntegrantesComponent } from './integrantes/formulario-integrantes.component';
import { ListaIntegrantesComponent } from './integrantes/lista-integrantes.component';
import { ListadetalleIntegrantesComponent } from './integrantes/listadetalle-integrantes.component';
import { FormularioMovimientosComponent } from './movimientos/formulario-movimientos.component';
import { ListaMovimientosComponent } from './movimientos/lista-movimientos.component';
import { ListadetalleMovimientosComponent } from './movimientos/listadetalle-movimientos.component';
import { FormularioReunionesComponent } from './reuniones/formulario-reuniones.component';
import { FormulariodetreuReunionesComponent } from './reuniones/formulariodetreu-reuniones.component';
import { ListaReunionesComponent } from './reuniones/lista-reuniones.component';
import { ListadetalleReunionesComponent } from './reuniones/listadetalle-reuniones.component';
import { ListadetreuReunionesComponent } from './reuniones/listadetreu-reuniones.component';


const routes: Routes = [
  {path: 'integrantes', component: ListaIntegrantesComponent},
  {path: 'integrantes/ingresarnuevo', component: FormularioIntegrantesComponent},
  {path: 'integrantes/:id', component: ListadetalleIntegrantesComponent},
  {path: 'movimientos', component: ListaMovimientosComponent},
  {path: 'movimientos/ingresarnuevo', component: FormularioMovimientosComponent},
  {path: 'movimientos/:id', component: ListadetalleMovimientosComponent},
  {path: 'reuniones', component: ListaReunionesComponent},
  {path: 'reuniones/ingresarnuevo', component: FormularioReunionesComponent},
  {path: 'reuniones/detalleReunion', component: ListadetreuReunionesComponent},
  {path: 'reuniones/ingresarNuevoDetReu', component: FormulariodetreuReunionesComponent},
  {path: 'reuniones/detalleReunion/:id', component: ListadetalleReunionesComponent},
  {path: 'inicio', component: BotonesInicioComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
