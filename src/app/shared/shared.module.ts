import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastNotificationsModule } from 'ngx-toast-notifications';

import { AboutMeComponent } from '../home/about-me/about-me.component';
import { EmailComponent } from '../home/email/email.component';
import { FooterComponent } from '../home/footer/footer.component';
import { InternshipComponent } from '../home/internship/internship.component';
import { LandingComponent } from '../home/landing/landing.component';
import { ProjectComponent } from '../home/projects/project/project.component';
import { ProjectsComponent } from '../home/projects/projects.component';
import { SkillsComponent } from '../home/skills/skills.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ProjectNavComponent } from '../navigation/project-nav/project-nav.component';


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
    InternshipComponent,
    EmailComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
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
    InternshipComponent,
    EmailComponent,
  ],
})
export class SharedModule {
}
