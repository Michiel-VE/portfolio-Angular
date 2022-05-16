import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DakreinigingLMComponent } from './dakreiniging-lm.component';


const routes: Routes = [{ path: '', component: DakreinigingLMComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DakreinigingLmRoutingModule {
}
