import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  currentLang: string = "";

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('en');

    console.log(this.currentLang)

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|nl/) ? browserLang : 'nl');
  }

  NavToggle(): void {
    let nav = document.getElementById('menu');

    // @ts-ignore
    nav.classList.toggle('hidden');
  }

  Scroll(section: string): void {
    // @ts-ignore
    document.getElementById(section)
      .scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    if (section !== 'home') {
      this.NavToggle()
    }
  }
}
