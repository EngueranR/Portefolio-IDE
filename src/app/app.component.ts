import { Component, OnInit } from '@angular/core';
import { WallpaperService } from '../services/wallpaper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PorteFolio';

  constructor(private wallpaperService: WallpaperService) { }

  ngOnInit() {
    this.wallpaperService.getChangeGradientEvent().subscribe(() => {
      this.changeGradient();
    });
  }

  public changeGradient() {
    const color1 = this.getVibrantColor();
    const color2 = this.getPastelColor();
    const angle = Math.floor(Math.random() * 360);
    const backgroundElement = document.getElementById('background');
    if (backgroundElement) {
      backgroundElement.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    }
  }

  getVibrantColor() {
    const vibrantColors = ['red', 'blue', 'yellow', 'magenta', 'lime'];
    return vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  }

  getPastelColor() {
    return "#" + Math.random().toString(16).slice(2, 8).toUpperCase() + "80";
  }
}
