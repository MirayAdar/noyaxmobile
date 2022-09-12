import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { GidService } from '../services/gid.service';
import { SubmenuModalComponent } from '../submenu-modal/submenu-modal.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router: Router, public gid: GidService) { }

  ngOnInit() {

  }
  async menuDetail(menu){
    if(menu.submenu){
    this.gid.callSubmenuModal(menu);
   }
   else{
   this.router.navigate([menu.url]);
   }
  }
}
