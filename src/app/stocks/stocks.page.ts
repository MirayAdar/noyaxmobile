import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { SubmenuModalComponent } from '../submenu-modal/submenu-modal.component';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.page.html',
  styleUrls: ['./stocks.page.scss'],
})
export class StocksPage  {

  constructor(private modalCtrl: ModalController, private routerOutlet: IonRouterOutlet) { }

  async forwardsubMenus(){
    const modal =  await this.modalCtrl.create({
      component: SubmenuModalComponent,
      cssClass: 'small-modal',
      presentingElement: this.routerOutlet.nativeEl,
      mode:'ios',
    })
    await modal.present();
  }


}
