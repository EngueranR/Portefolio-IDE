import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-json-skill',
  templateUrl: './json-skill.component.html',
  styleUrls: ['./json-skill.component.css']
})
export class JsonSkillComponent {
  jsonSkills: any;

  constructor(private http: HttpClient) { }



  ngOnInit() {
    this.http.get('assets/json/skill.json').subscribe(data => {
      this.jsonSkills = data;
    });

  }
}
