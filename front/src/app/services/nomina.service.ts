import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Nomina } from '../models/nomina';
import { Observable } from 'rxjs';

@Injectable()
export class NominaService {
    public headers:any;
    public url:string;
    constructor(
        private httpClient:HttpClient
    ) { 
        this.headers = new HttpHeaders().set("Content-Type","application/json");
        this.url = "/api/nomina";

    }
    testService(){
        return "Algo";
    };
    saveNomina(Nomina:Nomina):Observable<any>{
        let params = JSON.stringify(Nomina);
        return this.httpClient.post(this.url,params,{headers:this.headers})
    }
    getNominas():Observable<any>{
        return this.httpClient.get(this.url, {headers:this.headers});
    }
    getNomina(id):Observable<any>{
        return this.httpClient.get(this.url+'/'+id, {headers:this.headers});
    }
    deleteNomina(id):Observable<any>{
        return this.httpClient.delete(this.url+'/'+id, {headers:this.headers});
    }
}