import { Component, OnInit } from '@angular/core';
import { AgenteTransito } from '../../models/agenteTransito';
import { AgenteService } from '../../services/AgenteService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.css'],
  providers: [AgenteService]
})
export class AgentesComponent implements OnInit {

  public agenteTransito:AgenteTransito[];

  constructor(

    private agenteService :AgenteService,
    private router: Router
  ) { }

  ngOnInit(): void {

    localStorage.setItem("ref","0");

   
    this.agenteService.list().subscribe(response=>
      {
        this.agenteTransito = response;
      
      },error =>console.log(error))
  }

  eliminar(codigo: number):void
  {
    this.agenteService.deleteHistorial(codigo).subscribe(response=>
      {
        this.agenteService.remove(codigo).subscribe(response =>
          {
            
            this.ngOnInit();
            
          },error=>console.log(error))
        
      },error=>console.log(error))
  
   
  }

  editar(codigo:number):void
  {
    localStorage.setItem("code",codigo.toString());
    this.router.navigate(["/crearAgente"]);
  }

}
