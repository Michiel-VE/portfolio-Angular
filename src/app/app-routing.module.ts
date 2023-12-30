import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';

const routes: Routes = [
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
