import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-nav',
  templateUrl: './project-nav.component.html',
  styleUrls: ['./project-nav.component.css'],
})
export class ProjectNavComponent {
  @Input() projectName = '';

  NavToggle(): void {
    const nav = document.getElementById('menu');

    // @ts-ignore
    nav.classList.toggle('hidden');
  }
}
