import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { HomeComponent } from './home/home.component';
import { PolicyComponent } from './policy/policy.component';
import { MenuComponent } from './menu/menu.component';
import { PizzeriaComponent } from './pizzeria/pizzeria.component';
import { TrattoriaComponent } from './trattoria/trattoria.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'chi-siamo',
    component: ChiSiamoComponent
  },
  {
    path: 'contatti',
    component: ContattiComponent
  },
  {
    path: 'policy',
    component: PolicyComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'pizzeria',
    component: PizzeriaComponent
  },
  {
    path: 'trattoria',
    component: TrattoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
