import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { IconButtonComponent } from "./components/icon-button/icon-button.component";
import { ButtonComponent } from "./components/button/button.component";
import { LineComponent } from "./components/line/line.component";
import { ProfileOutlineComponent } from "./components/profile-outline/profile-outline.component";
import { SidebarLeftComponent } from "./layouts/sidebar-left/sidebar-left.component";
import { SidebarRightComponent } from "./layouts/sidebar-right/sidebar-right.component";
import { InputRowComponent } from "./components/input-row/input-row.component";
import { AccordionComponent } from "./components/accordion/accordion.component";
import { AccordionGroupComponent } from "./components/accordion/accordion-group.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const components = [
  IconButtonComponent,
  ButtonComponent,
  LineComponent,
  ProfileOutlineComponent,
  SidebarRightComponent,
  SidebarLeftComponent,
  InputRowComponent,
  AccordionComponent,
  AccordionGroupComponent,
];

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  declarations: [...components],
  exports: [...components, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
