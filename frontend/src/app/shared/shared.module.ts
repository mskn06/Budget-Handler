import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ButtonPressedComponent } from "./components/icon-button/icon-button.component";
import { ButtonRaisedComponent } from "./components/primary-button/primary-button.component";
import { LineComponent } from "./components/line/line.component";
import { ProfileOutlineComponent } from "./components/profile-outline/profile-outline.component";
import { SidebarLeftComponent } from "./layouts/sidebar-left/sidebar-left.component";
import { SidebarRightComponent } from "./layouts/sidebar-right/sidebar-right.component";

const components = [
  ButtonPressedComponent,
  ButtonRaisedComponent,
  LineComponent,
  ProfileOutlineComponent,
  SidebarRightComponent,
  SidebarLeftComponent
];

@NgModule({
  imports: [CommonModule],

  declarations: components,
  exports: components
})
export class SharedModule {}
