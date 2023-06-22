import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {
  constructor(private http: HttpClient) { }

  jsonExperiences: any;

  ngOnInit() {
    this.http.get('assets/json/experiences.json').subscribe(data => {
      this.jsonExperiences = data;
    });
  }

}
