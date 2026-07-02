import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { HomeComponent } from './home/home.component';
import { PolicyComponent } from './policy/policy.component';
import { MenuComponent } from './menu/menu.component';
import { PizzeriaComponent } from './pizzeria/pizzeria.component';
import { TrattoriaComponent } from './trattoria/trattoria.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { PrenotaComponent } from './prenota/prenota.component';
import { RecensioniComponent } from './recensioni/recensioni.component';
import { FotoComponent } from './foto/foto.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  // {
  //   path: 'chi-siamo',
  //   component: ChiSiamoComponent,
  // },
  // {
  //   path: 'contatti',
  //   component: ContattiComponent,
  // },
  {
    path: 'policy',
    component: PolicyComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  // {
  //   path: 'pizzeria',
  //   component: PizzeriaComponent,
  // },
  // {
  //   path: 'trattoria',
  //   component: TrattoriaComponent,
  // },
  {
    path: 'news/:id',
    component: NewsDetailComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'prenota',
    component: PrenotaComponent,
  },
  {
    path: 'recensioni',
    component: RecensioniComponent,
  },
  {
    path: 'foto',
    component: FotoComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
