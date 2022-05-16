import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { PhpRoutingModule } from './php-routing.module';
import { PhpComponent } from './php.component';


@NgModule({
  declarations: [
    PhpComponent,
  ],
  imports: [
    CommonModule,
    PhpRoutingModule,
    SharedModule,
  ],
})
export class PhpModule {
}
