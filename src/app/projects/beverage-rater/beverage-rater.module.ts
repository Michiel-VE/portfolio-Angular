import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { BeverageRaterRoutingModule } from './beverage-rater-routing.module';
import { BeverageRaterComponent } from './beverage-rater.component';


@NgModule({
  declarations: [
    BeverageRaterComponent,
  ],
  imports: [
    CommonModule,
    BeverageRaterRoutingModule,
    SharedModule,
  ],
})
export class BeverageRaterModule {
}
