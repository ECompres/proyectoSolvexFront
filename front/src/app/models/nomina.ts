import { Empleados } from './empleado';
export class Nomina{
    constructor(
        public Id:number,
        public Mes:string,
        public Anio:string,
        public Empleados:Empleados[]
    ){

    }
}