import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
})
export class HomeModule {}
