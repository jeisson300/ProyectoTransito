import { Component, OnInit } from '@angular/core';
import { AgenteTransito } from '../../models/agenteTransito';
import { AgenteService } from '../../services/AgenteService';
import {ViaService} from '../../services/ViaService';
import {Via} from '../../models/via';
import {Router} from '@angular/router';


@Component({
  selector: 'app-asignaciones',
  templateUrl: './asignaciones.component.html',
  styleUrls: ['./asignaciones.component.css'],
  providers:[AgenteService, ViaService]
})
export class AsignacionesComponent implements OnInit {

  public via: Via;
  public validar:number;

  public agenteTransito: AgenteTransito;
  public agentes: AgenteTransito[];
  public vias: Via[];

  constructor(
    private agenteService: AgenteService,
    private router: Router,
    private viaService: ViaService

  ) { 

    this.via = new Via(0,"","",0,0,[]);
    this.agenteTransito= new AgenteTransito(0,"",0,"", this.via);
  }

  ngOnInit(): void {
    this.validar= parseInt(localStorage.getItem("ref"));
  }


  onSubmit(form)
  {
    this.agenteService.filtrarVia(this.agenteTransito.codigo).subscribe(response=>
      {
        this.vias = response;
        if(this.vias.length ==0)
        {
          alert("El  agente de transito no tiene vias asociadas")
        }
      },error=>console.log(error))


  }

  onSubmitVia(form)
  {this.viaService.filtrarAgente(this.via).subscribe(response=>
    {
      this.agentes = response;
      if(this.agentes.length ==0)
      {
        alert("La via no tiene agentes de transito asociados")
      }
    },error=>console.log(error))

  }

}
