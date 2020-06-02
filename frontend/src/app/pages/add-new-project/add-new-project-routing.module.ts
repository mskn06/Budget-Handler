import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddNewProjectPage } from "./add-new-project.page";

const routes: Routes = [
  {
    path: "",
    component: AddNewProjectPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewProjectPageRoutingModule {}
