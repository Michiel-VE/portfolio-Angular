import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AppRoutingModule} from './app-routing.module';
import {PhpComponent} from './projects/php/php.component';
import {GeolocationComponent} from './projects/geolocation/geolocation.component';
import {LMSoundsComponent} from './projects/lm-sounds/lm-sounds.component';
import {BerverageRaterComponent} from './projects/berverage-rater/berverage-rater.component';
import {F1Component} from './projects/f1/f1.component';
import {DakreinigingLMComponent} from './projects/dakreiniging-lm/dakreiniging-lm.component';
import {HomeComponent} from './home/home.component';
import {LandingComponent} from './home/landing/landing.component';
import {AboutMeComponent} from './home/about-me/about-me.component';
import {ProjectsComponent} from './home/projects/projects.component';
import {ProjectComponent} from './home/projects/project/project.component';
import {SkillsComponent} from './home/skills/skills.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {MatSliderModule} from "@angular/material/slider";
import {MatSelectModule} from "@angular/material/select";
import {FooterComponent} from './home/footer/footer.component';
import {ProjectNavComponent} from './navigation/project-nav/project-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PhpComponent,
    GeolocationComponent,
    LMSoundsComponent,
    BerverageRaterComponent,
    F1Component,
    DakreinigingLMComponent,
    HomeComponent,
    LandingComponent,
    AboutMeComponent,
    ProjectsComponent,
    ProjectComponent,
    SkillsComponent,
    FooterComponent,
    ProjectNavComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatSliderModule,
        MatSelectModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
