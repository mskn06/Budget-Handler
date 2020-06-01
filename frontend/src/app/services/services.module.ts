import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { OrderService } from "./orders.service";

const services = [OrderService];

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
