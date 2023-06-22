import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RunService {
  // Initialiser avec une commande par défaut
  private commandSource = new BehaviorSubject<string>('');

  // Observable pour que d'autres composants puissent s'abonner
  currentCommand = this.commandSource.asObservable();

  constructor() {}

  // Méthode pour changer la commande
  changeCommand(command: string) {
    this.commandSource.next(command);
  }
}
