import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  public placeholderText = 'Finde the music';
  constructor(private menuController: MenuController) {}

  public menuToggle(): void {
    console.log('checked!');
    this.menuController.open('sideMenu');
  }
}
