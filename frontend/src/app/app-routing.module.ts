import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guard/auth_guard";

const routes: Routes = [
  {
    path: "user/:userId/projects",
    loadChildren: () =>
      import("./pages/projects/projects.module").then(
        (m) => m.ProjectsPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },

  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./pages/signup/signup.module").then((m) => m.SignupPageModule),
  },
  {
    path: "user/:userId/add-new-project",
    loadChildren: () =>
      import("./pages/add-new-project/add-new-project.module").then(
        (m) => m.AddNewProjectPageModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: "user/:userId/setting",
    loadChildren: () =>
      import("./pages/setting/setting.module").then((m) => m.SettingPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "user/:userId/staff",
    loadChildren: () =>
      import("./pages/staff/staff.module").then((m) => m.StaffPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "**",
    redirectTo: "/404",
    pathMatch: "full",
  },
  {
    path: "404",
    loadChildren: () =>
      import("./pages/404/404.module").then((m) => m.ErrorPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: "reload",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
