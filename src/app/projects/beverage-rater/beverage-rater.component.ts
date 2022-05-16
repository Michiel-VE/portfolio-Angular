import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-berverage-rater',
  templateUrl: './beverage-rater.component.html',
  styleUrls: ['./beverage-rater.component.css'],
})
export class BeverageRaterComponent {
  readonly PREFIX: string = 'MVE';

  constructor(public translate: TranslateService) {
    const browserLang = localStorage.getItem(`${this.PREFIX}_lang`) || 'en';
    translate.use(browserLang.match(/en|nl/) ? browserLang : 'en');
  }
}
