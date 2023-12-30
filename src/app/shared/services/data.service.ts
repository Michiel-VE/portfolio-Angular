import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Project } from '../../../interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataUrl: string

  constructor(private http: HttpClient) {}

  getData(language: string): Observable<Project[]> {
    if (language === 'nl') {
      this.dataUrl = 'assets/translation/nl.json'
    } else {
      this.dataUrl = 'assets/translation/en.json'
    }
    return this.http.get<Project[]>(this.dataUrl)
      .pipe(map((data: any):Project[] => {
        const projectsData = data.projects;
        return Array.isArray(projectsData) ? projectsData: Object.values(projectsData || {});
      }));
  }

}
