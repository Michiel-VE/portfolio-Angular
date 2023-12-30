import { TranslateService } from '@ngx-translate/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit, AfterViewInit {
  readonly PREFIX: string = 'MVE';
  currentLang = 'en';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'nl']);

    if (!localStorage.getItem(`${this.PREFIX}_lang`)) {
      localStorage.setItem(`${this.PREFIX}_lang`, window.navigator.language.slice(0, 2));
    }

    const browserLang = localStorage.getItem(`${this.PREFIX}_lang`) || 'en';
    translate.use(browserLang.match(/en|nl/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    const nav = document.getElementById('menu');
    nav.classList.add('hidden');
  }

  ngAfterViewInit(): void {
    document.onclick = (args: any): void => {
      if (args.target.tagName !== 'SPAN' && args.target.tagName !== 'BUTTON' && args.target.tagName !== 'SELECT') {
        const nav = document.getElementById('menu');
        nav.classList.add('hidden');
      }
    };
  }

  navToggle(): void {
    const nav = document.getElementById('menu');
    nav.classList.toggle('hidden');
  }

  scroll(section: string): void {
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
    document.documentElement.setAttribute('lang', this.translate.currentLang);
    return this.translate.currentLang === lang;
  }
}
