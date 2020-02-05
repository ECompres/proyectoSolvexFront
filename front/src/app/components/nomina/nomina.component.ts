import { Component, OnInit } from '@angular/core';
import { NominaService } from 'src/app/services/nomina.service';
import { Nomina } from 'src/app/models/nomina';

@Component({
  selector: 'app-nomina',
  templateUrl: './nomina.component.html',
  styleUrls: ['./nomina.component.css']
})
export class NominaComponent implements OnInit {

  public nominas:any;
  public nomina:Nomina;
  constructor(
    private nominaService:NominaService
  ) { }
    public length:number;
    public suma:number;

  ngOnInit() {
    this.getNominas();
  

  }
  getNominas(){
    this.nominaService.getNominas().subscribe(
      (res)=>{
        this.nominas=res;
        this.length = res.length;
        console.log(this.nominas);
        
      },
      err=>console.log(err)
    );
  }
}
