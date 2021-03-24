import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Via} from '../models/via';


@Injectable()
export class ViaService{


    public url: string ;
    

    constructor(
        private _http: HttpClient

    )
    
    {this.url= 'http://localhost:8080/'}

    save(via: Via):Observable<any>
    {
       return  this._http.post(this.url+"addVia",via);
    }

    list():Observable<any>
    {
        return this._http.get(this.url+"listVia");
    }


    remove(identificador:number):Observable<any>
    {
        return this._http.delete(this.url+"deleteVia/"+identificador);
    }

    search(identificador:number):Observable<any>
    {
        return this._http.get(this.url+"searchVia/"+identificador);
    }


    update(via: Via):Observable<any>
    {
        return this._http.put(this.url+"updateVia",via);
    }

    listApta():Observable<any>
    {
        return this._http.get(this.url+"listViaApta");
    }

    filtrarAgente(via: Via):Observable<any>
    {
        return this._http.post(this.url+"historialAgente",via);
    }





}