import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ErrorPage } from "./404.page";

const routes: Routes = [
  {
    path: "",
    component: ErrorPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorPageRoutingModule {}
