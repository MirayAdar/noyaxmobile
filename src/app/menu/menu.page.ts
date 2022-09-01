import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { SubmenuModalComponent } from '../submenu-modal/submenu-modal.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor( private modalCtrl: ModalController,private routerOutlet: IonRouterOutlet, private router: Router) { }

  ngOnInit() {

  }
  async menuDetail(menu){
    if(menu.submenu){
    const modal = await this.modalCtrl.create({
     component: SubmenuModalComponent,
     componentProps: {
       submenu : menu.submenu
     },
     presentingElement: this.routerOutlet.nativeEl,
     mode:'ios'
    })
    await modal.present();
   }
   else{
   this.router.navigate(['/menu.url']);
   }
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
      description: 'Cari bayileri, stok durumu vb raporlarınızı alın',
      submenu: [{
        subtitle: 'Cari Bakiyeleri',
        url: '/cari',
      },
       {subtitle: 'Stok Durumu',
        url:'/stocks'}
    ]
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
