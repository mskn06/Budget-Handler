import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";

import { ErrorPageRoutingModule } from "./404-routing.module";

import { ErrorPage } from "./404.page";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [CommonModule, IonicModule, ErrorPageRoutingModule, SharedModule],
  declarations: [ErrorPage],
})
export class ErrorPageModule {}
