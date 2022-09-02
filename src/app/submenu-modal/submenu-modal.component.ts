import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-submenu-modal',
  templateUrl: './submenu-modal.component.html',
  styleUrls: ['./submenu-modal.component.scss'],
})
export class SubmenuModalComponent implements OnInit {
@Input() submenu : any[];
  constructor(public modalCtrl : ModalController, private router: Router) { }

  ngOnInit() {
    console.log(this.submenu);
  }
  forwardSubmenu(submenu){
     this.router.navigate([submenu.url]);
     this.modalCtrl.dismiss();
  }
}
