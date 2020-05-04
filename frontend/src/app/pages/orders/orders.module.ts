import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { OrdersPageRoutingModule } from "./orders-routing.module";

import { OrdersPage } from "./orders.page";
import { SharedComponentsModule } from "../../shared/components/shared-components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [OrdersPage]
})
export class OrdersPageModule {}
