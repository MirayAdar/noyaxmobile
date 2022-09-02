import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public selectedIndex = 0;
  canShowSetting:boolean;
  constructor(private platform: Platform,  private statusBar: StatusBar) {}
  // public appPages = [
  //   {
  //     title: 'Ana sayfa',
  //     url: '/folder/Inbox',
  //     icon: 'home'
  //   },
  //   {
  //     title: 'Ayarlar',
  //     url: '/..',
  //     icon: 'person'
  //   },
  //   {
  //     title:'İşlemler',
  //     url:'/home/dashboard',
  //     icon: 'clipboard'
  //   },
  //   {
  //     title:'Menu Değiştir',
  //     url:'/..',
  //     icon:'menu'
  //   }
  //   // {
  //   //   title: 'Cariler',
  //   //   url: '/..',
  //   //   icon: 'basket'
  //   // },
  //   // {
  //   //   title: 'Ürünler',
  //   //   url: '/about',
  //   //   icon: 'heart'
  //   // },
  //   // {
  //   //   title: 'Teklifler',
  //   //   url: '/contactus',
  //   //   icon: 'mail'
  //   // },
  //   // {
  //   //   title: 'Faturalar',
  //   //   url: '/faq',
  //   //   icon: 'help'
  //   // },
  //   // {
  //   //   title: 'Tahsilatlar',
  //   //   url: '/about',
  //   //   icon: 'heart'
  //   // },
  //   // {
  //   //   title: 'Masraflar',
  //   //   url: '/contactus',
  //   //   icon: 'mail'
  //   // },
  //   // {
  //   //   title: 'Raporlar',
  //   //   url: '/faq',
  //   //   icon: 'help'
  //   // },
  //   // {
  //   //   title: 'Aktiviteler',
  //   //   url: '/faq',
  //   //   icon: 'help'
  //   // },
  //   // {
  //   //   title: 'Barkod Listeleri',
  //   //   url: '/faq',
  //   //   icon: 'help'
  //   // },
  //   // {
  //   //   title: 'Sipariş Ürünleri Toplama',
  //   //   url: '/faq',
  //   //   icon: 'help'
  //   // },

  // ];
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      //this.splashScreen.hide();
    });
  }

  ngOnInit(){
    // const path = window.location.pathname.split('folder/')[1];
    // if (path !== undefined) {
    //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
  }
}
