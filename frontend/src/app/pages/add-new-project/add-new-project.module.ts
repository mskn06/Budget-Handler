import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AddNewProjectPageRoutingModule } from "./add-new-project-routing.module";

import { AddNewProjectPage } from "./add-new-project.page";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewProjectPageRoutingModule,
    SharedModule,
  ],
  declarations: [AddNewProjectPage],
})
export class AddNewProjectPageModule {}
