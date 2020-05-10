import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTableModule } from "@angular/material/table";

import { IonicModule } from "@ionic/angular";

import { OrdersPageRoutingModule } from "./orders-routing.module";

import { OrdersPage } from "./orders.page";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersPageRoutingModule,
    SharedModule,
    MatExpansionModule,
    MatTableModule
  ],
  declarations: [OrdersPage]
})
export class OrdersPageModule {}
