import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-sidebar-left",
  templateUrl: "./sidebar-left.component.html",
  styleUrls: ["./sidebar-left.component.scss"]
})
export class SidebarLeftComponent implements OnInit {
  @Input() pageName;

  // data sent to component
  pressed = "pressed";
  raised = "raised";
  primaryPressed = "primary-pressed";
  primaryRaised = "primary-raised";

  orderIcon = "../../../../assets/icon/orders.png";
  orderIconActive = "../../../../assets/icon/orders_active.png";
  staffIcon = "../../../../assets/icon/members.png";
  staffIconActive = "../../../../assets/icon/members_active.png";
  settingIcon = "../../../../assets/icon/setting.png";
  settingIconActive = "../../../../assets/icon/setting_active.png";
  addOrderIcon = "../../../../assets/icon/add_order.png";
  logoutIcon = "../../../../assets/icon/logout.png";

  constructor() {}

  ngOnInit() {
  }
}
