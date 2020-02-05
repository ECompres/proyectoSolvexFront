import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NominaComponent } from './components/nomina/nomina.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/shared/dashboard/dashboard.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { NominaDetalleComponent } from './components/nomina-detalle/nomina-detalle.component';
import { DetalleEmpleadoComponent } from './components/detalle-empleado/detalle-empleado.component';

const routes:Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'nomina', component: NominaComponent },
    { path: 'detalleNomina/:id', component: NominaDetalleComponent},
    { path: 'empleados', component: EmpleadosComponent},
    { path: 'detallesEmpleado/:id', component: DetalleEmpleadoComponent},
    { path: '**', component: HomeComponent },
];

export const appRouting = RouterModule.forRoot(routes);