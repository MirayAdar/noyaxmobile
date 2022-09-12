import { Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { SubmenuModalComponent } from '../submenu-modal/submenu-modal.component';

@Injectable({
  providedIn: 'root'
})
export class GidService {
  public menuPages = [
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
  constructor(private modalCtrl: ModalController) { }

 async callSubmenuModal(menu){
  const modal = await this.modalCtrl.create({
    component: SubmenuModalComponent,
    componentProps: {
      submenu : menu.submenu
    },
    //presentingElement: this.routerOutlet.nativeEl,
    mode:'md',
    cssClass: 'small-modal'
   })
   await modal.present();
  }
}
