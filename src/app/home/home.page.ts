import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  public appPages = [
    {
      title: 'Ana sayfa',
      url: '/folder/Inbox',
      icon: 'home'
    },
    {
      title: 'Cariler',
      url: '/shoppingcart',
      icon: 'basket'
    },
    {
      title: 'Ayarlar',
      url: '/myprofile',
      icon: 'person'
    },
    {
      title: 'Hakkımızda',
      url: '/about',
      icon: 'heart'
    },
    {
      title: 'İletişim',
      url: '/contactus',
      icon: 'mail'
    },
    {
      title: 'SSS',
      url: '/faq',
      icon: 'help'
    }
  ];
}
