import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { F1RoutingModule } from './f1-routing.module';
import { F1Component } from './f1.component';


@NgModule({
  declarations: [
    F1Component,
  ],
  imports: [
    CommonModule,
    F1RoutingModule,
    SharedModule,
  ],
})
export class F1Module {
}
