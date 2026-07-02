import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { PolicyComponent } from './policy/policy.component';
import { MenuComponent } from './menu/menu.component';
import { PizzeriaComponent } from './pizzeria/pizzeria.component';
import { TrattoriaComponent } from './trattoria/trattoria.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { PrenotaComponent } from './prenota/prenota.component';
import { RecensioniComponent } from './recensioni/recensioni.component';
import { FotoComponent } from './foto/foto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChiSiamoComponent,
    ContattiComponent,
    PolicyComponent,
    MenuComponent,
    PizzeriaComponent,
    TrattoriaComponent,
    NewsComponent,
    NewsDetailComponent,
    PrenotaComponent,
    RecensioniComponent,
    FotoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
