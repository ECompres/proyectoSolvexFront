import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DashboardComponent } from './components/shared/dashboard/dashboard.component';
import { NominaComponent } from './components/nomina/nomina.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { appRouting } from './app.routing';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { DetalleEmpleadoComponent } from './components/detalle-empleado/detalle-empleado.component'
import { EmpleadoService } from './services/empleado.service';
import { NominaService } from './services/nomina.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NominaDetalleComponent } from './components/nomina-detalle/nomina-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    DashboardComponent,
    NominaComponent,
    MenuComponent,
    EmpleadosComponent,
    DetalleEmpleadoComponent,
    NominaDetalleComponent,
    
  ],
  imports: [
    BrowserModule,
    appRouting,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EmpleadoService,
    NominaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
