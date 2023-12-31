import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { TruncatePipe } from './pipes/truncate.pipe';
import { NavigationComponent } from '../navigation/navigation.component';
import { SkillsComponent } from '../home/skills/skills.component';
import { ProjectsComponent } from '../home/projects/projects.component';
import { ProjectComponent } from '../home/projects/project/project.component';
import { LandingComponent } from '../home/landing/landing.component'
import { FooterComponent } from '../home/footer/footer.component';
import { EmailComponent } from '../home/email/email.component';
import { DonateComponent } from '../home/donate/donate.component';
import { AboutMeComponent } from '../home/about-me/about-me.component';


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
    EmailComponent,
    DonateComponent,
    TruncatePipe,
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
    FooterComponent,
    SkillsComponent,
    ProjectsComponent,
    AboutMeComponent,
    LandingComponent,
    NavigationComponent,
    EmailComponent,
    DonateComponent,
  ],
})
export class SharedModule {
}
