import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ButtonPressedComponent } from "./icon-button/icon-button.component";
import { ButtonRaisedComponent } from "./primary-button/primary-button.component";
import { LineComponent } from "./line/line.component";
import { ProfileOutlineComponent } from "./profile-outline/profile-outline.component";
import { SidebarLeftComponent } from "./sidebar-left/sidebar-left.component";
import { SidebarRightComponent } from "./sidebar-right/sidebar-right.component";

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
export class SharedComponentsModule {}
