import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { SubmenuModalComponent } from '../submenu-modal/submenu-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  entryComponents: [SubmenuModalComponent],
  declarations: [MenuPage, SubmenuModalComponent]
})
export class MenuPageModule {}
