import {Direccion} from './direccion';
export class Empleados{
    constructor(
        public Id:number,
        public Nombre:string,
        public Apellido:string,
        public Cedula:number,
        public Puesto:string,
        public Departamento:string,
        public Sueldo:number,
        public Direccion:Direccion,
        public NombreUsuario:string,
        public Password:string,
        public NominaId:number
    ){}
}