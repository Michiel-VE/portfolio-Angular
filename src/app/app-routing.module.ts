import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeModule } from './home/home.module';
import { BeverageRaterModule } from './projects/beverage-rater/beverage-rater.module';
import { DakreinigingLmModule } from './projects/dakreiniging-lm/dakreiniging-lm.module';
import { F1Module } from './projects/f1/f1.module';
import { GeolocationModule } from './projects/geolocation/geolocation.module';
import { LmSoundsModule } from './projects/lm-sounds/lm-sounds.module';
import { PhpModule } from './projects/php/php.module';

const routes: Routes = [
  {
    path: 'projects',
    children: [
      {
        path: 'php',
        loadChildren: () => import('./projects/php/php.module')
          .then((m: { PhpModule: PhpModule }) => m.PhpModule),
      },
      {
        path: 'geolocation',
        loadChildren: () => import('./projects/geolocation/geolocation.module')
          .then((m: { GeolocationModule: GeolocationModule }) => m.GeolocationModule),
      },
      {
        path: 'lm-sounds',
        loadChildren: () => import('./projects/lm-sounds/lm-sounds.module')
          .then((m: { LmSoundsModule: LmSoundsModule }) => m.LmSoundsModule),
      },
      {
        path: 'beverage-rater',
        loadChildren: () => import('./projects/beverage-rater/beverage-rater.module')
          .then((m: { BeverageRaterModule: BeverageRaterModule }) => m.BeverageRaterModule),
      },
      {
        path: 'f1',
        loadChildren: () => import('./projects/f1/f1.module')
          .then((m: { F1Module: F1Module }) => m.F1Module),
      },
      {
        path: 'dakreiniging-lm',
        loadChildren: () => import('./projects/dakreiniging-lm/dakreiniging-lm.module')
          .then((m: { DakreinigingLmModule: DakreinigingLmModule }) => m.DakreinigingLmModule),
      },
    ],
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module')
      .then((m: { HomeModule: HomeModule }) => m.HomeModule),
  },
  {
    path: '**',
    loadChildren: () => import('./home/home.module')
      .then((m: { HomeModule: HomeModule }) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      anchorScrolling: 'enabled',
      preloadingStrategy: PreloadAllModules,
    },
  )],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
