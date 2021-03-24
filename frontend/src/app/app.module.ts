import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import {routing,appRoutingProviders} from './app.routing'  ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { AgentesComponent } from './components/agentes/agentes.component';
import { ViasComponent } from './components/vias/vias.component';
import { AsignacionesComponent } from './components/asignaciones/asignaciones.component';
import { CreateAgenteComponent } from './components/create-agente/create-agente.component';
import { CreateViaComponent } from './components/create-via/create-via.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AgentesComponent,
    ViasComponent,
    AsignacionesComponent,
    CreateAgenteComponent,
    CreateViaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
