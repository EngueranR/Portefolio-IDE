import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-json-cursus',
  templateUrl: './json-cursus.component.html',
  styleUrls: ['./json-cursus.component.css']
})
export class JsonCursusComponent {

  jsonCursus: any;

  constructor(private http: HttpClient) {
  }


  ngOnInit() {
    this.http.get('assets/json/cursus.json').subscribe(data => {
      this.jsonCursus = data;
    });
  }

  protected readonly Array = Array;
}
