import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-dakreiniging-lm',
  templateUrl: './dakreiniging-lm.component.html',
  styleUrls: ['./dakreiniging-lm.component.css'],
})
export class DakreinigingLMComponent {
  readonly PREFIX: string = 'MVE';

  constructor(public translate: TranslateService) {
    const browserLang = localStorage.getItem(`${this.PREFIX}_lang`) || 'en';
    translate.use(browserLang.match(/en|nl/) ? browserLang : 'en');
  }
}
