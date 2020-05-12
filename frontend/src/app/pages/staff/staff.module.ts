import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { StaffPageRoutingModule } from "./staff-routing.module";

import { StaffPage } from "./staff.page";
import { SharedModule } from "src/app/shared/shared.module";
import { MaterialModule } from "src/app/shared/material-modules";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffPageRoutingModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [StaffPage]
})
export class StaffPageModule {}
