import { Component, OnInit } from '@angular/core';
import {ViaService} from '../../services/ViaService';
import {AgenteService} from '../../services/AgenteService';
import {Via} from '../../models/via';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vias',
  templateUrl: './vias.component.html',
  styleUrls: ['./vias.component.css'],
  providers:[ViaService, AgenteService]
})
export class ViasComponent implements OnInit {

  public vias: Via[];

  constructor(

      private viaService: ViaService,
      private router: Router,
      private agenteService: AgenteService
  ) { }

  ngOnInit(): void {

    localStorage.setItem("ref","1");

    this.viaService.list().subscribe(response=>
      {
        this.vias = response;
      },error=>console.log(error));
  }

  eliminar(identificador:number):void{
    this.agenteService.validateCodeVia(identificador).subscribe(response=>
      {
        if(response==false)
        {
          this.viaService.remove(identificador).subscribe(response =>
            {
              this.ngOnInit();
            },error=>console.log(error))
        }
        else{
          alert("La via se encuentra asignada");
        }
      });
  }

  editar(identificador:number):void
  {
    localStorage.setItem("id",identificador.toString());
    this.router.navigate(["/crearVias"]);
  }

}
