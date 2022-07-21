import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetallesTutorComponent } from './detalles-tutor/detalles-tutor.component';


@NgModule({
    declarations: [ListaSolicitudesComponent, DetallesTutorComponent],
    imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule, FormsModule],
})
export class AdminModule { }