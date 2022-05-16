import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeverageRaterComponent } from './beverage-rater.component';


const routes: Routes = [{ path: '', component: BeverageRaterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeverageRaterRoutingModule { }
