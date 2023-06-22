import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-json-contact',
  templateUrl: './json-contact.component.html',
  styleUrls: ['./json-contact.component.css']
})
export class JsonContactComponent {


  jsonContact: any;

  constructor(private http: HttpClient) {
  }


  ngOnInit() {
    this.http.get('assets/json/contact.json').subscribe(data => {
      this.jsonContact = data;
    });
  }

  protected readonly Array = Array;
}
