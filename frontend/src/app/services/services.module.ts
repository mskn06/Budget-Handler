import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { ProjectService } from "./projects.service";
import { LoginService } from "./login.service";
import { SignupService } from "./signup.service";

const services = [ProjectService, LoginService, SignupService];

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: services,
  providers: [...services],
  exports: services,
})
export class apiServices {}
