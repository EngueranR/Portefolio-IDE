import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {ShareService} from "../../services/share.service";

@Component({
  selector: 'app-window-ide',
  templateUrl: './window-ide.component.html',
  styleUrls: ['./window-ide.component.css']
})
export class WindowIdeComponent implements OnInit {
  @ViewChild('myWindow') myWindow!: ElementRef;

  private dragging = false;
  private offset = { x: 0, y: 0 };

  oExperiences: boolean = false;
  oCursus: boolean = false;
  oSkills: boolean = false;
  oContact: boolean = false;
  oMain: boolean = false;

  oJExperiences: boolean = false;
  oJCursus: boolean = false;
  oJSkills: boolean = false;
  oJContact: boolean = false;
  constructor(private shareService: ShareService) { }


  ngOnInit() {
    this.shareService.currentExperiences.subscribe(oExperiences => {
      this.oExperiences = oExperiences;
    });

    this.shareService.currentCursus.subscribe(oCursus => {
      this.oCursus = oCursus;
    });

    this.shareService.currentSkills.subscribe(oSkills => {
      this.oSkills = oSkills;
    });

    this.shareService.currentContact.subscribe(oContact => {
      this.oContact = oContact;
    });

    this.shareService.currentMain.subscribe(oMain => {
      this.oMain = oMain;
    });

    this.shareService.currentJExperiences.subscribe(oJExperiences => {
      this.oJExperiences = oJExperiences;
    });

    this.shareService.currentJCursus.subscribe(oJCursus => {
      this.oJCursus = oJCursus;
    });

    this.shareService.currentJSkills.subscribe(oJSkills => {
      this.oJSkills = oJSkills;
    });

    this.shareService.currentJContact.subscribe(oJContact => {
      this.oJContact = oJContact;
    });

  }




  onMouseDown(event: MouseEvent) {
    this.dragging = true;
    this.offset = {
      x: this.myWindow.nativeElement.offsetLeft - event.clientX,
      y: this.myWindow.nativeElement.offsetTop - event.clientY
    };
  }

  onMouseUp() {
    this.dragging = false;
  }

  onMouseMove(event: MouseEvent) {
    event.preventDefault();
    if (this.dragging) {
      this.myWindow.nativeElement.style.top = event.clientY + this.offset.y + 'px';
      this.myWindow.nativeElement.style.left = event.clientX + this.offset.x + 'px';
    }
  }
}
