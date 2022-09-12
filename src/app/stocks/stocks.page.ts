import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GidService } from '../services/gid.service';
import { SubmenuModalComponent } from '../submenu-modal/submenu-modal.component';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.page.html',
  styleUrls: ['./stocks.page.scss'],
})
export class StocksPage  {

  constructor( public gid: GidService) {}

  async forwardsubMenus(){
    this.gid.callSubmenuModal(this.gid.menuPages.find(a=> a.title == "Raporlar"));
    // const modal =  await this.modalCtrl.create({
    //   component: SubmenuModalComponent,
    //   cssClass: 'small-modal',
    //   presentingElement: this.routerOutlet.nativeEl,
    //   mode:'ios',
    // })
    // await modal.present();
  }



}
