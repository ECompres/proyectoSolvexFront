import { Component, OnInit } from '@angular/core';
import { NominaService } from 'src/app/services/nomina.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Nomina } from 'src/app/models/nomina';
import { Empleados } from 'src/app/models/empleado';

@Component({
  selector: 'app-nomina-detalle',
  templateUrl: './nomina-detalle.component.html',
  styleUrls: ['./nomina-detalle.component.css']
})
export class NominaDetalleComponent implements OnInit {
  public nomina:Nomina;
  
  constructor(
    private nominaService:NominaService,
    private route:ActivatedRoute
  ) { }

  getNomina(id){
    this.nominaService.getNomina(id).subscribe((res)=>{
      if(res) this.nomina = res;
      console.log(this.nomina);
    },err =>console.log(err));
  }
  ngOnInit() {
    this.route.params.subscribe((params)=>{
      let id = params.id;
      this.getNomina(id);
    })
  }

}
