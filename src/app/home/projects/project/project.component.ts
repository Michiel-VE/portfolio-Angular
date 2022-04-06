import {Component, Input} from '@angular/core';
import {Project} from "../../../../interfaces/project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  @Input() project!: Project;
}
