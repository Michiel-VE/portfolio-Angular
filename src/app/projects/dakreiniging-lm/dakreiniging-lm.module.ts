import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { DakreinigingLmRoutingModule } from './dakreiniging-lm-routing.module';
import { DakreinigingLMComponent } from './dakreiniging-lm.component';


@NgModule({
  declarations: [
    DakreinigingLMComponent,
  ],
  imports: [
    CommonModule,
    DakreinigingLmRoutingModule,
    SharedModule,
  ],
})
export class DakreinigingLmModule {
}
