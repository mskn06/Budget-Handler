import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "projects",
    loadChildren: () =>
      import("./pages/projects/projects.module").then(
        (m) => m.ProjectsPageModule
      ),
  },
  {
    path: "",
    redirectTo: "projects",
    pathMatch: "full",
  },
  {
    path: "add-new-project",
    loadChildren: () =>
      import("./pages/add-new-project/add-new-project.module").then(
        (m) => m.AddNewProjectPageModule
      ),
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
    path: "setting",
    loadChildren: () =>
      import("./pages/setting/setting.module").then((m) => m.SettingPageModule),
  },
  {
    path: "staff",
    loadChildren: () =>
      import("./pages/staff/staff.module").then((m) => m.StaffPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
