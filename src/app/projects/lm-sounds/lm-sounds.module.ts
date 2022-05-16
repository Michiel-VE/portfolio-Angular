import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { LmSoundsRoutingModule } from './lm-sounds-routing.module';
import { LMSoundsComponent } from './lm-sounds.component';


@NgModule({
  declarations: [
    LMSoundsComponent,
  ],
  imports: [
    CommonModule,
    LmSoundsRoutingModule,
    SharedModule,
  ],
})
export class LmSoundsModule {
}
