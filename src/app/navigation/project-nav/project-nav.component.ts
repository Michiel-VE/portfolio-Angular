import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-nav',
  templateUrl: './project-nav.component.html',
  styleUrls: ['./project-nav.component.css'],
})
export class ProjectNavComponent implements AfterViewInit {
  @Input() projectName = '';

  NavToggle(): void {
    const nav = document.getElementById('menu');
    nav.classList.toggle('hidden');
  }

  ngAfterViewInit(): void {
    document.onclick = (args: any): void => {
      if (args.target.tagName !== 'SPAN' && args.target.tagName !== 'BUTTON' && args.target.tagName !== 'SELECT') {
        const nav = document.getElementById('menu');
        nav.classList.add('hidden');
      }
    };
  }
}
