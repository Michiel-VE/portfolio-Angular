import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-lm-sounds',
  templateUrl: './lm-sounds.component.html',
  styleUrls: ['./lm-sounds.component.css'],
})
export class LMSoundsComponent {
  readonly PREFIX: string = 'MVE';

  constructor(public translate: TranslateService) {
    const browserLang = localStorage.getItem(`${this.PREFIX}_lang`) || 'en';
    translate.use(browserLang.match(/en|nl/) ? browserLang : 'en');
  }
}
