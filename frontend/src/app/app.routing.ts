import{ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { AgentesComponent } from './components/agentes/agentes.component';
import { ViasComponent } from './components/vias/vias.component';
import { AsignacionesComponent } from './components/asignaciones/asignaciones.component';
import { CreateAgenteComponent } from './components/create-agente/create-agente.component';
import { CreateViaComponent } from './components/create-via/create-via.component';

const appRoutes : Routes =[

{path:'',component:IndexComponent},
{path:'inicio',component:IndexComponent},
{path:'agentes',component:AgentesComponent},
{path:'vias',component:ViasComponent},
{path: 'asignaciones', component:AsignacionesComponent},
{path: 'crearAgente', component:CreateAgenteComponent},
{path: 'crearVias', component:CreateViaComponent},
{path: '**', component:IndexComponent}
];

export const appRoutingProviders : any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);