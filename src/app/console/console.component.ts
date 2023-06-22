import {Component} from '@angular/core';
import { WallpaperService } from '../../services/wallpaper.service';
import {RunService} from "../../services/run.service";
@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent {
  logs: string[] = [];
  currentCommand: string = '';

  constructor(private run: RunService, private wallpaper: WallpaperService) { }


  ngOnInit(): void {
    this.run.currentCommand.subscribe(command => {
      this.currentCommand = command;
      this.executeCommand();
    });
  }

  executeCommand() {
    switch (this.currentCommand) {
      case 'wallpaper':
        this.wallpaper.triggerChangeGradient();
        break;
      case 'help':
        this.logs.push('Commandes disponibles : help, javac main, wallpaper');
        break;
      case 'javac main':
        this.logs.push(
          'year : 2022\n' +
          'role : Développeur\n' +
          'company : Université polytechnique des Hauts-de-France\n' +
          'description : Participation à l’événement la nuit de l’info, Obtention des prix, Eco-concept de l’entreprise IPPON TECHNOLOGIE, Eco Index  de l’entreprise CODE-TROOPERS\n\n' +

          'year : 2021- 2023\n' +
          'role : CDI Étudiant, équipier de vente\n' +
          'company : Carrefour, Denain\n' +
          'description : Travaillant en tant que membre de l\'équipe de vente chez Carrefour à Denain.\n\n' +

          'year : Août 2019\n' +
          'role : Intérimaire. Travail à la chaîne\n' +
          'company : Sauces et créations, Raillencourt-Sainte-Olle\n' +
          'description : Travaillé sur la chaîne de montage chez Sauces et créations.\n\n' +

          'year : Juillet 2019\n' +
          'role : Intérimaire. Réception des marchandises\n' +
          'company : Lidl, Sailly-lez-Cambrai\n' +
          'description : Gestion de la réception des marchandises chez Lidl.\n\n' +

          'year : 2019 - Actuellement\n' +
          'description : Étudiant en licence Informatique.\n' +
          'institution : Université du Mont-Houy, Valenciennes.\n\n' +

          'year : 2018 - 2019\n' +
          'description : Étudiant en classe préparatoire aux grandes écoles TSI.\n' +
          'institution : Lycée du Hainaut, Valenciennes.\n\n' +

          'year : 2015 - 2018\n' +
          'description : Baccalauréat, STI2D mention bien.\n' +
          'institution : Lycée ALFRED KASTLER, Denain.\n\n' +

          'language : Java\n' +
          'sourceIcon : assets/images/java.svg\n\n' +

          'language : HTML\n' +
          'sourceIcon : assets/images/html.svg\n\n' +

          'language : CSS\n' +
          'sourceIcon : assets/images/css.svg\n\n' +

          'language : JavaScript\n' +
          'sourceIcon : assets/images/javascript.svg\n\n' +

          'language : PHP\n' +
          'sourceIcon : assets/images/php.svg\n\n' +

          'language : SQL\n' +
          'sourceIcon : assets/images/sql.svg\n\n' +

          'language : C\n' +
          'sourceIcon : assets/images/c.svg\n\n' +

          'language : C#\n' +
          'sourceIcon : assets/images/csharp.svg\n\n' +

          'language : Angular\n' +
          'sourceIcon : assets/images/angular.svg\n\n' +

          'type : Email\n' +
          'value : rt.engueran@gmail.com\n' +
          'sourceIcon : assets/images/email.svg\n\n' +

          'type : Téléphone\n' +
          'value : 06 . 75 . 31 . 64 . 10\n' +
          'sourceIcon : assets/images/phone.svg\n\n' +

          'type : Localisation\n' +
          'value : 6 Place de l’hôpital Général Valenciennes (59300)\n' +
          'sourceIcon : assets/images/location.svg\n\n' +

          'type : Permis de conduire\n' +
          'value : Permis Voiture (B2), Véhiculé\n' +
          'sourceIcon : assets/images/car.svg\n\n' +

          'type : Réseaux sociaux\n' +
          'value : LinkedIn, GitHub\n' +
          'sourceIcon : assets/images/social.svg\n\n' +

          'type : Langues\n' +
          'value : Français (natif), Anglais (intermédiaire)\n' +
          'sourceIcon : assets/images/language.svg\n'
        );
        break;
      default:
        this.logs.push('Commande inconnue. Tapez help pour la liste des commandes disponibles');
    }
    this.currentCommand = '';
  }




}

