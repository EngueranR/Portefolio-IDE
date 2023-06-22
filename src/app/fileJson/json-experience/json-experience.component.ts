import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-json-experience',
  templateUrl: './json-experience.component.html',
  styleUrls: ['./json-experience.component.css']
})
export class JsonExperienceComponent {

  jsonExperiences: any;

  constructor(private http: HttpClient) { }



  ngOnInit() {
    this.http.get('assets/json/experience.json').subscribe(data => {
      this.jsonExperiences = data;
    });

  }

  protected readonly Array = Array;
}
