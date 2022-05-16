import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhpComponent } from './php.component';

const routes: Routes = [{ path: '', component: PhpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhpRoutingModule { }
