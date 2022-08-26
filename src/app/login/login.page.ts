import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //reminderOptions : string[];
  constructor(private router: Router, private loadingCtrl: LoadingController) { }
  signupForm = new FormGroup({
    userName : new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  ngOnInit() {
  }
  reminderOptions = [
    {id: 0, reminderInfo:'Giriş bilgilerimi hatırlama'},
    {id: 1, reminderInfo: 'Kullanıcı adımı hatırla' },
    {id: 2, reminderInfo: 'Kullanıcı adımı ve şifremi hatırla'}
    ];

  forgotpassword(){
    console.log("unuttum");
  }

  login(){
    if(this.signupForm.valid){
      this.loadingCtrl.create({
        message: "Login işlemi başarılı"
      }).then(loading => {
        loading.present();
        setTimeout(() => {
          this.router.navigate(['/companyselection']);
          loading.dismiss();
        },2000)
      })

    }
  }

}
