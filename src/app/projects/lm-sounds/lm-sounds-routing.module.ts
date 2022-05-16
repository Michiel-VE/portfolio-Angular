import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LMSoundsComponent } from './lm-sounds.component';


const routes: Routes = [{ path: '', component: LMSoundsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LmSoundsRoutingModule { }
