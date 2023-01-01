import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderModule } from '../components/header/header.module';
import { FooterModule } from '../components/footer/footer.module';
import { SubscriptionModule } from '../components/subscription/subscription.module';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    HeaderModule,
    SubscriptionModule,
    FooterModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
