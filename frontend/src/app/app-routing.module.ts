import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "add-new-order",
    loadChildren: () =>
      import("./pages/add-new-order/add-new-order.module").then(
        m => m.AddNewOrderPageModule
      )
  },
  {
    path: "orders",
    loadChildren: () =>
      import("./pages/orders/orders.module").then(m => m.OrdersPageModule)
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then(m => m.LoginPageModule)
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./pages/signup/signup.module").then(m => m.SignupPageModule)
  },
  {
    path: "setting",
    loadChildren: () =>
      import("./pages/setting/setting.module").then(m => m.SettingPageModule)
  },
  {
    path: "staff",
    loadChildren: () =>
      import("./pages/staff/staff.module").then(m => m.StaffPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
