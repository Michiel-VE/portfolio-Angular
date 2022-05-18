import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InternshipComponent } from './internship/internship.component';


@NgModule({
  declarations: [
    HomeComponent,
    InternshipComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
})
export class HomeModule {
}
