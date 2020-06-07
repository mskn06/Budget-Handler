import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { ProjectService } from "./projects.service";
import { LoginService } from "./login.service";
import { SignupService } from "./signup.service";
import { StaffService } from "./staff.service";
import { UserService } from "./user.service";

const services = [
  ProjectService,
  LoginService,
  SignupService,
  StaffService,
  UserService,
];

@NgModule({
  imports: [CommonModule, IonicModule],
  providers: [...services],
})
export class apiServices {}
