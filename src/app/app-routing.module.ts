import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path:'', redirectTo:"home",pathMatch:"full"},
  {path: 'home', component: HomeComponent},
  {path: 'formulario', component: FormularioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
