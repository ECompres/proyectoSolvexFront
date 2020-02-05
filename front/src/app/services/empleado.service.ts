import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleados } from '../models/empleado';

@Injectable()
export class EmpleadoService {
    public headers:any;
    public url:string;
    constructor(private httpClient: HttpClient) { 
        this.headers = new HttpHeaders().set("Content-Type","application/json");
        this.url = "/api/empleado";
    }
    
    testService(){
        return "Algo";
    };
    saveEmpleado(Empleado:Empleados):Observable<any>{
        let params = JSON.stringify(Empleado);
        return this.httpClient.post(this.url,params,{headers:this.headers})
    }
    getEmpleados():Observable<any>{
        return this.httpClient.get(this.url, {headers:this.headers});
    }
    getEmpleado(id):Observable<any>{
        return this.httpClient.get(this.url+'/'+id, {headers:this.headers});
    }
    deleteEmpleado(id):Observable<any>{
        return this.httpClient.delete(this.url+'/'+id, {headers:this.headers});
    }
}