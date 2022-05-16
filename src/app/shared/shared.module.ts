import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AboutMeComponent } from '../home/about-me/about-me.component';
import { FooterComponent } from '../home/footer/footer.component';
import { LandingComponent } from '../home/landing/landing.component';
import { ProjectComponent } from '../home/projects/project/project.component';
import { ProjectsComponent } from '../home/projects/projects.component';
import { SkillsComponent } from '../home/skills/skills.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ProjectNavComponent } from '../navigation/project-nav/project-nav.component';
import { BeverageRaterComponent } from '../projects/beverage-rater/beverage-rater.component';
import { DakreinigingLMComponent } from '../projects/dakreiniging-lm/dakreiniging-lm.component';
import { F1Component } from '../projects/f1/f1.component';
import { GeolocationComponent } from '../projects/geolocation/geolocation.component';
import { LMSoundsComponent } from '../projects/lm-sounds/lm-sounds.component';


export const createTranslateLoader = (http: HttpClient): TranslateHttpLoader => new TranslateHttpLoader(http, './assets/translation/', '.json');


@NgModule({
  declarations: [
    NavigationComponent,
    LandingComponent,
    AboutMeComponent,
    ProjectsComponent,
    ProjectComponent,
    SkillsComponent,
    FooterComponent,
    ProjectNavComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    TranslateModule,
    ProjectNavComponent,
    FooterComponent,
    SkillsComponent,
    ProjectsComponent,
    AboutMeComponent,
    LandingComponent,
    NavigationComponent,
  ],
})
export class SharedModule {
}
