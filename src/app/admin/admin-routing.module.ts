import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesTutorComponent } from './detalles-tutor/detalles-tutor.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';

const routes: Routes = [
    { path: '', redirectTo: 'solicitud', pathMatch: 'full' },
    { path: 'solicitud', component: ListaSolicitudesComponent },
    { path: 'detalles/:id', component: DetallesTutorComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
