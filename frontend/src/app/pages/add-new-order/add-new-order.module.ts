import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewOrderPageRoutingModule } from './add-new-order-routing.module';

import { AddNewOrderPage } from './add-new-order.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewOrderPageRoutingModule,
    SharedModule
  ],
  declarations: [AddNewOrderPage]
})
export class AddNewOrderPageModule {}
