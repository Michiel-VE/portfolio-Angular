import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  NavToggle(): void {
    let nav = document.getElementById('menu');

    // @ts-ignore
    nav.classList.toggle('hidden');
  }

  Scroll(section: string): void{
    // @ts-ignore
    document.getElementById(section)
      .scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
    if (section !== 'home'){
    this.NavToggle()
    }
  }
}
