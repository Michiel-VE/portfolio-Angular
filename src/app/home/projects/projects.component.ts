import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

import { DataService } from '../../shared/services/data.service';
import { Project } from '../../../interfaces/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[]

  constructor(private dataService: DataService, public translate: TranslateService) {
  }

  ngOnInit(): void {

    this.translate.onLangChange.subscribe(()=> {
      this.dataService.getData(this.translate.currentLang).subscribe((projects: Project[]) => {
        this.projects = projects;
      });
    })

  }
}
