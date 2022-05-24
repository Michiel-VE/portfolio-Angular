import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { SharedModule } from '../shared/shared.module';
import { EmailComponent } from './email/email.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InternshipComponent } from './internship/internship.component';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
})
export class HomeModule {
}
