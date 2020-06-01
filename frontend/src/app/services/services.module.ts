import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { GetAllOrdersService } from "./order/get-all-orders.service";

const services = [GetAllOrdersService];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    
  ],
  declarations: services,
  providers: [...services],
  exports: services,
})
export class apiServices {}
