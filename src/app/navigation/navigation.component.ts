import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  readonly PREFIX: string = 'MVE';
  currentLang = 'en';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'nl']);

    if (!localStorage.getItem(`${this.PREFIX}_lang`)) {
      localStorage.setItem(`${this.PREFIX}_lang`, window.navigator.language.slice(1));
    }

    const browserLang = localStorage.getItem(`${this.PREFIX}_lang`) || 'en';
    translate.use(browserLang.match(/en|nl/) ? browserLang : 'en');
  }

  navToggle(): void {
    const nav = document.getElementById('menu');

    // @ts-ignore
    nav.classList.toggle('hidden');
  }

  scroll(section: string): void {
    // @ts-ignore
    document.getElementById(section)
      .scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    if (section !== 'home') {
      this.navToggle();
    }
  }

  changeSelectedLanguage(lang: string): boolean {
    localStorage.setItem(`${this.PREFIX}_lang`, this.translate.currentLang);
    return this.translate.currentLang === lang;
  }
}
