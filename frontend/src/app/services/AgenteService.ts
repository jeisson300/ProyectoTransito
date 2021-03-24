import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AgenteTransito} from '../models/agenteTransito';


@Injectable()
export class AgenteService{


    public url: string ;
    

    constructor(
        private _http: HttpClient


    )
    {this.url= 'http://localhost:8080/'}

    save(agenteTransito: AgenteTransito):Observable<any>
    {
       return  this._http.post(this.url+"addAgente",agenteTransito);
    }

    list():Observable<any>
    {
        return this._http.get(this.url+"listAgente");
    }

    remove(code:number):Observable<any>
    {
        return this._http.delete(this.url+"deleteAgente/"+code);
    }

    search(code:number):Observable<any>
    {
        return this._http.get(this.url+"searchAgente/"+code);
    }
    update(agenteTransito : AgenteTransito):Observable<any>
    {
        return this._http.put(this.url+"updateAgente", agenteTransito);
    }

    filtrarVia(code:number):Observable<any>
    {
        return this._http.get(this.url+"historialVia/"+code);
    }

    validateCodeVia(identificador:number):Observable<any>
    {
        return this._http.get(this.url+"validateCodeVia/"+identificador);
    }

    deleteHistorial(code:number):Observable<any>
    {
        return this._http.delete(this.url+"deleteHistorial/"+code);
    }





}