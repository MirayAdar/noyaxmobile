import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StocksPageRoutingModule } from './stocks-routing.module';

import { StocksPage } from './stocks.page';
import { SubmenuModalComponent } from '../submenu-modal/submenu-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StocksPageRoutingModule
  ],
  declarations: [StocksPage,SubmenuModalComponent],
  entryComponents: [SubmenuModalComponent],
})
export class StocksPageModule {}
