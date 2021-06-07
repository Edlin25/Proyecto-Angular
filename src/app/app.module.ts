import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ HttpClient, HttpClientModule } from '@angular/common/http';
import { IntegrantesService } from './services/integrantes.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {ListaIntegrantesComponent} from './integrantes/lista-integrantes.component';
import { FormularioIntegrantesComponent } from './integrantes/formulario-integrantes.component';
import { ListaMovimientosComponent } from './movimientos/lista-movimientos.component';
import { FormularioMovimientosComponent } from './movimientos/formulario-movimientos.component';
import { ListaReunionesComponent } from './reuniones/lista-reuniones.component';
import { FormularioReunionesComponent } from './reuniones/formulario-reuniones.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormulariodetreuReunionesComponent } from './reuniones/formulariodetreu-reuniones.component';
import { ListadetreuReunionesComponent } from './reuniones/listadetreu-reuniones.component';
import { BotonesInicioComponent } from './inicio/botones-inicio.component';
import { ListadetalleIntegrantesComponent } from './integrantes/listadetalle-integrantes.component';
import { ListadetalleMovimientosComponent } from './movimientos/listadetalle-movimientos.component';
import { ListadetalleReunionesComponent } from './reuniones/listadetalle-reuniones.component'

@NgModule({
  declarations: [
    AppComponent,
    ListaIntegrantesComponent,
    FormularioIntegrantesComponent,
    ListaMovimientosComponent,
    FormularioMovimientosComponent,
    ListaReunionesComponent,
    FormularioReunionesComponent,
    NavbarComponent,
    FormulariodetreuReunionesComponent,
    ListadetreuReunionesComponent,
    BotonesInicioComponent,
    ListadetalleIntegrantesComponent,
    ListadetalleMovimientosComponent,
    ListadetalleReunionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [IntegrantesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
