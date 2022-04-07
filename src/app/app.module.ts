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
import {FooterComponent} from './home/footer/footer.component';
import {ProjectNavComponent} from './navigation/project-nav/project-nav.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/translation/', '.json');
}

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
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
