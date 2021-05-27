import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { MenuPrincipalComponent } from '../app/components/admin/menu-principal/menu-principal.component'
import { NavegadorComponent } from '../app/components/navegador/navegador.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'navegador', component: NavegadorComponent},
  { path: 'menuprincipal', component: MenuPrincipalComponent},
  { path: '**', pathMatch: 'full', redirectTo:'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
