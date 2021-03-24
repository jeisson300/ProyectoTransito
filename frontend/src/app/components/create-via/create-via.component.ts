import { Component, OnInit } from '@angular/core';
import {ViaService} from '../../services/ViaService';
import {Via} from '../../models/via';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-create-via',
  templateUrl: './create-via.component.html',
  styleUrls: ['./create-via.component.css'],
  providers:[ViaService]
})
export class CreateViaComponent implements OnInit {

  public via :Via;
  public id: number;

  constructor(

    private viaService: ViaService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.via = new Via(0,"","",0,0,[]);
   
  }

  ngOnInit(): void {
     this.id = parseInt(localStorage.getItem("id"));
    if( this.id!=0)
    {
     
      this.viaService.search(this.id).subscribe(response =>
       {
         this.via = response;
        
       },error=>console.log(error))
      
    }
   
  }

  onSubmit(form)
  {
    if(this.via.nivelCongestion>=0 && this.via.nivelCongestion<=100)
    {
      this.viaService.save(this.via).subscribe(response=>
        {
          if(response==true)
          {
            alert("Exito en el registro");
             this.router.navigate(["/vias"]);
          }
          else
          {
            alert("Error, la via ya se encuentra registrada, intente otras especificaciones");
          }
        },error=>console.log(error));

    }else{
      alert("Error, el nivel de congestion debe ser entre 0 y 100");
    }
    
  }

  onSubmitActualizar(form)
  {
    this.viaService.update(this.via).subscribe(response =>
      {
        if(response == true)
        {
          alert("Actualizado");
          localStorage.setItem("id","0");
          this.router.navigate(["/vias"]);
        }
        else
        {
          alert("Error")
        }
      },error =>console.log(error))
  }

}
