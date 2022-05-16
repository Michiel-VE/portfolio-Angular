import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { GeolocationRoutingModule } from './geolocation-routing.module';
import { GeolocationComponent } from './geolocation.component';


@NgModule({
  declarations: [
    GeolocationComponent,
  ],
  imports: [
    CommonModule,
    GeolocationRoutingModule,
    SharedModule,
  ],
})
export class GeolocationModule {
}
