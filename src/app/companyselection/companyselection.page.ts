import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-companyselection',
  templateUrl: './companyselection.page.html',
  styleUrls: ['./companyselection.page.scss'],
})
export class CompanyselectionPage implements OnInit {
  companyPeriod: number[] = [];
  constructor() { }
  companyForm = new FormGroup({
    companyName: new FormControl('', Validators.required),
    companyPeriod: new FormControl('', Validators.required)
  });
  companyOptions = [
    {id:0, companyName:"Elron Yazılım"},
    {id:1, companyName: "Bonegraft Biyolojik Malzemeler"},
    {id:2, companyName: "Univerlist"}
  ]

  ngOnInit() {
    for(var i =0; i<8; i++){
     this.companyPeriod.push(i+2015);
    }
    console.log(this.companyPeriod);
  }

}
