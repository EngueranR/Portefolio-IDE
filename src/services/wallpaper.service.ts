import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WallpaperService {
  // On utilise Subject pour permettre aux composants de s'abonner à des changements
  private changeGradientEvent = new Subject<void>();

  // Fonction pour permettre aux composants de déclencher l'événement
  triggerChangeGradient() {
    this.changeGradientEvent.next();
  }

  // Fonction pour permettre aux composants de s'abonner à l'événement
  getChangeGradientEvent() {
    return this.changeGradientEvent.asObservable();
  }
}
