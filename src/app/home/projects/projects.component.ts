import { Component, OnInit } from '@angular/core';
import {Project} from "../../../interfaces/project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Project PHP',
      img: 'php',
      url: 'php',
      description: 'A platform where you can sign up to give presentations.',
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
      description: 'Cleaning a roof is an easy job for him',
      completed: false
    },
  ]
}
