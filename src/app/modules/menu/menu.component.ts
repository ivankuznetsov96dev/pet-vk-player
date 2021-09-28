import { Component, Input, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() public content: string;
  public pages: Array<{ title: string; component: any }>;

  constructor() {}

  ngOnInit(): void {
    this.pages = [
      { title: 'Hello Ionic', component: HomeComponent },
      { title: 'My First List', component: HomeComponent },
    ];
  }

  public openPage(p: any): void {}
}
