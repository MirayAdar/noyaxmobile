import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyselectionPageRoutingModule } from './companyselection-routing.module';

import { CompanyselectionPage } from './companyselection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyselectionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CompanyselectionPage]
})
export class CompanyselectionPageModule {}
