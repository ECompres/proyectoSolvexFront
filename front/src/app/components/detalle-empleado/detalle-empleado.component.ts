import { Component, OnInit } from '@angular/core';

import { EmpleadoService } from 'src/app/services/empleado.service';
import { ActivatedRoute } from '@angular/router';
import { NominaService } from 'src/app/services/nomina.service';
import { Nomina } from 'src/app/models/nomina';
import { Empleados } from 'src/app/models/empleado';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {
  public pId:number;
  public empleado:Empleados;
  public nominas:Nomina;
  constructor(
    private empleadoService:EmpleadoService,
    private nominaService:NominaService,
    private route:ActivatedRoute
  ) { }

  getEmpleado(id){
    this.empleadoService.getEmpleado(id).subscribe(
      (res)=>{
        if(res) this.empleado = res;
        console.log(this.empleado)
      },
      err=>console.log(err)
    )
  }
  public length:number;

  getNominas(){
    this.nominaService.getNominas().subscribe(
      (res)=>{
        if(res) this.nominas=res;
        this.length = res.length;
        console.log(this.nominas);
      },
      err=>console.log(err)
    );
  }
  ngOnInit() {
    this.getNominas();
  
    console.log(this.nominas);
    this.route.params.subscribe((params)=>{
      let id = params.id;
      this.pId = id;
      this.getEmpleado(id);
      console.log(this.empleado);
    })
  }

}
