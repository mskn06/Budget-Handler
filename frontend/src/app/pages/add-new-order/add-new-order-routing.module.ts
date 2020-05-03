import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewOrderPage } from './add-new-order.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewOrderPageRoutingModule {}
