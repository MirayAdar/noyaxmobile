import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public appPages = [
    // {
    //   title: 'Ana sayfa',
    //   url: '/folder/Inbox',
    //   icon: 'home'
    // },
    // {
    //   title: 'Ayarlar',
    //   url: '/..',
    //   icon: 'person'
    // },
    // {
    //   title:'İşlemler',
    //   url:'/home/dashboard',
    //   icon: 'clipboard'
    // },
    // {
    //   title:'Menü Değiştir',
    //   url:'/..',
    //   icon:'menu'
    // },
    // {
    //   title: 'Çıkış Yap',
    //   url:'/login',
    //   icon:'log-out'

    // }
    {
      title: 'Cariler',
      url: '/..',
      icon: 'basket',
      description: 'Cari kayıtlarınızı yönetin'
    },
    {
      title: 'Ürünler',
      url: '/about',
      icon: 'heart',
      description: 'Ürün kayıtlarınızı yönetin'
    },
    {
      title: 'Teklifler',
      url: '/contactus',
      icon: 'mail',
      description: 'Müşterilerinize verdiğiniz teklifleri yönetin'
    },
    {
      title: 'Faturalar',
      url: '/faq',
      icon: 'help',
      description: 'Satış faturalarınızı yönetin'
    },
    {
      title: 'Tahsilatlar',
      url: '/about',
      icon: 'heart',
      description: 'Tahsilat kayıtlarınızı yönetin'
    },
    {
      title: 'Masraflar',
      url: '/contactus',
      icon: 'mail',
      description: 'Masraf kayıtlarınızı yönetin'
    },
    {
      title: 'Raporlar',
      url: '/faq',
      icon: 'help',
      description: 'Cari bayileri, stok durumu vb raporlarınızı alın'
    },
    {
      title: 'Aktiviteler',
      url: '/faq',
      icon: 'help',
      description: 'Müşteriniz ile yapılan görüşmelerinizi kayıt altına alın'
    },
    {
      title: 'Barkod Listeleri',
      url: '/faq',
      icon: 'help',
      description: 'Ürünlerinizin barkodlarını okutarak fiş oluşturun'
    },
    {
      title: 'Sipariş Ürünleri Toplama',
      url: '/faq',
      icon: 'help',
      description: 'Ürünlerinizin barkodlarını okutarak toplayın'
    },

  ];
}
