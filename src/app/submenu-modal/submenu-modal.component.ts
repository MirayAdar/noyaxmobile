import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-submenu-modal',
  templateUrl: './submenu-modal.component.html',
  styleUrls: ['./submenu-modal.component.scss'],
})
export class SubmenuModalComponent implements OnInit {
@Input() submenu : any[];
  constructor(private modalCtrl : ModalController) { }
  closeNotifyModal() {
    this.modalCtrl.dismiss();
   }
  ngOnInit() {
    console.log(this.submenu);
  }

}
