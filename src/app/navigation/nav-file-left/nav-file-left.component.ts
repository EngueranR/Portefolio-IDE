import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ShareService} from "../../../services/share.service";

@Component({
  selector: 'app-nav-file-left',
  templateUrl: './nav-file-left.component.html',
  styleUrls: ['./nav-file-left.component.css']
})
export class NavFileLeftComponent {
  experiences: any;
  cursus: any;
  skills:any;
  contact:any;

  oExperiences: boolean = false;
  oCursus: boolean = false;
  oSkills: boolean = false;
  oContact: boolean = false;
  oMain: boolean = false;

  oJExperiences: boolean = false;
  oJCursus: boolean = false;
  oJSkills: boolean = false;
  oJContact: boolean = false;

  constructor(private shareService: ShareService, private http: HttpClient,private router: Router) { }


  openExperiences():void {
    this.shareService.openExperiences();
  }

  openCursus():void {
    this.shareService.openCursus();
  }

  openSkills():void {
    this.shareService.openSkills();
  }

  openMain():void {
    this.shareService.openMain();
  }

  openContact():void {
    this.shareService.openContact();
  }

  openJsonExperiences():void {
    this.shareService.openJExperiences();
  }

  openJsonCurus():void {
    this.shareService.openJCursus();
  }

  openJsonSkills():void {
    this.shareService.openJSkills();
  }

  openJsonContact():void {
    this.shareService.openJContact();
  }


  ngOnInit() {
    this.openMain();
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



    this.http.get('assets/json/experience.json').subscribe(data => {
      this.experiences = data;
    });

    this.http.get('assets/json/cursus.json').subscribe(data => {
      this.cursus = data;
    });

    this.http.get('assets/json/skill.json').subscribe(data => {
      this.skills = data;
    });

    this.http.get('assets/json/contact.json').subscribe(data => {
      this.contact = data;
    });


  }


}
