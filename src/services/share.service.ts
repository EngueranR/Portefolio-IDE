import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private oExperiences = new BehaviorSubject(false);
  private oCursus = new BehaviorSubject(false);
  private oSkills = new BehaviorSubject(false);
  private oContact = new BehaviorSubject(false);
  private oMain = new BehaviorSubject(false);

  private oJExperiences= new BehaviorSubject(false);
  private oJCursus= new BehaviorSubject(false);
  private oJSkills= new BehaviorSubject(false);
  private oJContact= new BehaviorSubject(false);

  currentExperiences = this.oExperiences.asObservable();
  currentCursus = this.oCursus.asObservable();
  currentSkills = this.oSkills.asObservable();
  currentContact = this.oContact.asObservable();
  currentMain = this.oMain.asObservable();

  currentJExperiences = this.oJExperiences.asObservable();
  currentJCursus = this.oJCursus.asObservable();
  currentJSkills = this.oJSkills.asObservable();
  currentJContact = this.oJContact.asObservable();


  constructor() { }
  openExperiences(): void {
    this.closeAll();
    this.oExperiences.next(true);
  }

  openCursus(): void {
    this.closeAll();
    this.oCursus.next(true);
  }

  openSkills(): void {
    this.closeAll();
    this.oSkills.next(true);
  }

  openContact(): void {
    this.closeAll();
    this.oContact.next(true);
  }

  openMain(): void {
    this.closeAll();
    this.oMain.next(true);
  }

  openJExperiences(): void {
    this.closeAll();
    this.oJExperiences.next(true);
  }

  openJCursus(): void {
    this.closeAll();
    this.oJCursus.next(true);
  }

  openJSkills(): void {
    this.closeAll();
    this.oJSkills.next(true);
  }

  openJContact(): void {
    this.closeAll();
    this.oJContact.next(true);
  }



  closeAll(): void {
    this.oExperiences.next(false);
    this.oCursus.next(false);
    this.oSkills.next(false);
    this.oContact.next(false);
    this.oMain.next(false);
    this.oJExperiences.next(false);
    this.oJCursus.next(false);
    this.oJSkills.next(false);
    this.oJContact.next(false);

  }

}
