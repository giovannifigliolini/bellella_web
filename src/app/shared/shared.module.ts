import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { VesuvioComponent } from './vesuvio/vesuvio.component';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './carousel/carousel.component';
import {CarouselModule} from 'primeng/carousel';
import { PhotoHeaderComponent } from './photo-header/photo-header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    VesuvioComponent,
    AboutComponent,
    CarouselComponent,
    PhotoHeaderComponent,
    PortfolioComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    VesuvioComponent,
    AboutComponent,
    CarouselComponent,
    PhotoHeaderComponent,
    PortfolioComponent
  ]
})
export class SharedModule { }
