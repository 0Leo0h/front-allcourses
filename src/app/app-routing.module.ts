import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeticionComponent } from './peticion/peticion.component';
import { PeticionesComponent } from './peticiones/peticiones.component';
import { RegisterTutorComponent } from './register-tutor/register-tutor.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'registerT', component: RegisterTutorComponent },
  { path: 'peticion/:id', component: PeticionComponent },
  { path: 'auth', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'peticiones', component: PeticionesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
