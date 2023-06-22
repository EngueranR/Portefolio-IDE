import { Component } from '@angular/core';
import {RunService} from "../../../services/run.service";

@Component({
  selector: 'app-nav-window',
  templateUrl: './nav-window.component.html',
  styleUrls: ['./nav-window.component.css']
})
export class NavWindowComponent {

  constructor(private run: RunService) { }

  onSvgClick(): void {
    this.run.changeCommand('javac main');
  }
}
