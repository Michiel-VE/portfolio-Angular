import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {BerverageRaterComponent} from './projects/berverage-rater/berverage-rater.component';
import {DakreinigingLMComponent} from './projects/dakreiniging-lm/dakreiniging-lm.component';
import {F1Component} from './projects/f1/f1.component';
import {GeolocationComponent} from './projects/geolocation/geolocation.component';
import {LMSoundsComponent} from './projects/lm-sounds/lm-sounds.component';
import {PhpComponent} from './projects/php/php.component';

const routes: Routes = [
  {
    path: 'projects',
    children: [
      {
        path: 'php',
        component: PhpComponent,
      },
      {
        path: 'geolocation',
        component: GeolocationComponent,
      },
      {
        path: 'lm-sounds',
        component: LMSoundsComponent,
      },
      {
        path: 'beverage-rater',
        component: BerverageRaterComponent,
      },
      {
        path: 'f1',
        component: F1Component,
      },
      {
        path: 'darkreiniging-lm',
        component: DakreinigingLMComponent,
      },
    ],
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
