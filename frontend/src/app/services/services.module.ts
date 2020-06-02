import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { ProjectService } from "./projects.service";

const services = [ProjectService];

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: services,
  providers: [...services],
  exports: services,
})
export class apiServices {}
