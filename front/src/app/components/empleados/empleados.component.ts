import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [EmpleadoService]
})
export class EmpleadosComponent implements OnInit {

  constructor(private _empleadoService:EmpleadoService) { }
  public empleados:any[];
  
  
  
  ngOnInit() {
    this.getEmpleados();
  
  }
  
 getEmpleados(){
   this._empleadoService.getEmpleados().subscribe((res)=>{
    if(res) this.empleados = res;
  
    console.log(this.empleados);
   },
   err =>console.log(err));
 }
 deleteEmpleado(id){
  this._empleadoService.deleteEmpleado(id).subscribe((res)=>{
    if(res)
    console.log(this.empleados);
   },
   err =>console.log(err));
 }
}
