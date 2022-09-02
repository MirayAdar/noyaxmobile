import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GidService {
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
      icon: '/assets/imgs/cariler.svg',
      description: 'Cari kayıtlarınızı yönetin'
    },
    {
      title: 'Ürünler',
      url: '/about',
      icon: '/assets/imgs/urunler.svg',
      description: 'Ürün kayıtlarınızı yönetin'
    },
    {
      title: 'Teklifler',
      url: '/contactus',
      icon: '/assets/imgs/teklifler.svg',
      description: 'Müşterilerinize verdiğiniz teklifleri yönetin'
    },
    {
      title: 'Faturalar',
      url: '/faq',
      icon: '/assets/imgs/faturalar.svg',
      description: 'Satış faturalarınızı yönetin'
    },
    {
      title: 'Tahsilatlar',
      url: '/about',
      icon: '/assets/imgs/tahsilatlar.svg',
      description: 'Tahsilat kayıtlarınızı yönetin'
    },
    {
      title: 'Masraflar',
      url: '/home/dashboard',
      icon: '/assets/imgs/tahsilatlar.svg',
      description: 'Masraf kayıtlarınızı yönetin'
    },
    {
      title: 'Raporlar',
      url: '/faq',
      icon: '/assets/imgs/raporlar.svg',
      description: 'Cari bayileri, stok durumu vb raporlarınızı alın',
      submenu: [{
        subtitle: 'Cari Bakiyeleri',
        url: '/cari',
        iconName:'document-text'
       },
       {subtitle: 'Stok Durumu',
        url:'/stocks',
        iconName:'cube'
      },
       {subtitle: 'Ürün Listesi ',
        url:'/stocks',
        iconName:'cube'
      },
        {subtitle: 'Sayım',
        url:'/stocks',
        iconName:'cube'
      },
      {subtitle: 'Cariler',
       url: '/cari',
       iconName:'document-text'
     },
    ]
    },
    {
      title: 'Aktiviteler',
      url: '/faq',
      icon: '/assets/imgs/aktiviteler.svg',
      description: 'Müşteriniz ile yapılan görüşmelerinizi kayıt altına alın'
    },
    {
      title: 'Barkod Listeleri',
      url: '/faq',
      icon: '/assets/imgs/barkodListeleri.svg',
      description: 'Ürünlerinizin barkodlarını okutarak fiş oluşturun'
    },
    {
      title: 'Sipariş Ürünleri Toplama',
      url: '/faq',
      icon: '/assets/imgs/urunToplama.svg',
      description: 'Ürünlerinizin barkodlarını okutarak toplayın'
    },

  ];
  constructor() { }
}
