import { Component, OnInit } from '@angular/core';
import {AgenteService} from '../../services/AgenteService';
import {AgenteTransito} from '../../models/agenteTransito';
import {Via} from '../../models/via';
import {ViaService} from '../../services/ViaService'; 
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-agente',
  templateUrl: './create-agente.component.html',
  styleUrls: ['./create-agente.component.css'],
  providers:[AgenteService, ViaService]
})
export class CreateAgenteComponent implements OnInit {

  public agenteTransito: AgenteTransito;
  public code: number;
  public vias: Via[];
  public via: Via;

  constructor(

    private agenteService: AgenteService,
    private router:Router,
    private viaService: ViaService
  ) {
    this.via = new Via(0,"","",0,0,[]);
    this.agenteTransito= new AgenteTransito(0,"",0,"", this.via);
   
   }

  ngOnInit(): void {

    this.code =parseInt(localStorage.getItem("code"));
    if(this.code!=0)
    {
      this.agenteService.search(this.code).subscribe(response=>
        {
          this.agenteTransito = response;
        },error =>console.log(error));
    }
    this.listViaApta();
  }

  listViaApta():void
  {
    this.viaService.listApta().subscribe(response => {this.vias = response},error=>console.log(error));
  }

  onSubmit(from)
  {
     
        this.searchVia();
        this.agenteTransito.via =this.via;
        this.agenteService.save(this.agenteTransito).subscribe(response=>
          {
            if(response==true)
            {
              alert("Registrado con exito")
              this.router.navigate(["/agentes"]);
            }
            else{
              alert("Error, el codigo ya esta registrado");
            }
    
          },error=>console.log(error));
      
   
  }

  searchVia():void
  {
    this.vias.forEach(element =>{
      if(element.identificador==this.via.identificador)
      {
        this.via =element;
      }
    });
  }

  onSubmitActualizar(form):void
  {
    this.searchVia();
    this.agenteTransito.via =this.via;
    this.agenteService.update(this.agenteTransito).subscribe(response=>
      {
        if(response ==true)
        {
          alert("Actualizado")
          this.router.navigate(["/agentes"]);
        }
        else 
        {
          alert("Error");
        }
      },error=>console.log(error))
  }

}
