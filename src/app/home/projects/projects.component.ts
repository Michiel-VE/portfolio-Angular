import {Component} from '@angular/core';
import {Project} from "../../../interfaces/project";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects_en: Project[] = [
    {
      name: 'Project PHP',
      img: 'php',
      url: 'php',
      description: 'A platform to promote internationalisation.',
      completed: true
    },
    {
      name: 'Geolocation',
      img: 'geo',
      url: 'geolocation',
      description: 'A project to show data from 1834 on modern maps.',
      completed: true
    },
    {
      name: 'LM-Sounds',
      img: 'lm',
      url: 'lm-sounds',
      description: 'Website to book a DJ.',
      completed: true
    },
    {
      name: 'Beverage Rater',
      img: 'br',
      url: 'beverage-rater',
      description: 'An application that you can use to find or rate drinks.',
      completed: true
    },
    {
      name: 'F1',
      img: 'soon',
      url: 'f1',
      description: 'With this angular application you can follow the F1 adventure.',
      completed: false
    },
    {
      name: 'Dakreiniging LM',
      img: 'soon',
      url: 'darkreiniging-lm',
      description: 'Cleaning a roof is an easy job for him.',
      completed: false
    },
  ];

  projects_nl: Project[] = [
    {
      name: 'Project PHP',
      img: 'php',
      url: 'php',
      description: 'Een platform om internationalisering te promoten.',
      completed: true
    },
    {
      name: 'Geolocatie',
      img: 'geo',
      url: 'geolocation',
      description: 'Een project om data uit 1834 to tonen op hedendaagse kaarten.',
      completed: true
    },
    {
      name: 'LM-Sounds',
      img: 'lm',
      url: 'lm-sounds',
      description: 'Website om een DJ te boeken.',
      completed: true
    },
    {
      name: 'Beverage Rater',
      img: 'br',
      url: 'beverage-rater',
      description: 'In deze app kan je dranken zoeken en beoordelen.',
      completed: true
    },
    {
      name: 'F1',
      img: 'soon',
      url: 'f1',
      description: 'Met deze Angular app kan je het F1 avontuur volgen.',
      completed: false
    },
    {
      name: 'Dakreiniging LM',
      img: 'soon',
      url: 'darkreiniging-lm',
      description: 'Een dakreinigen is een simpel werkje',
      completed: false
    },
  ]

  constructor(public translate: TranslateService) {
  }
}
