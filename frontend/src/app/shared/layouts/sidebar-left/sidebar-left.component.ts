import { Component, OnInit, Input } from "@angular/core";
import { Router } from '@angular/router';

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

  // icons 
  icon = "../../../../assets/icon/"
  orderIcon = this.icon + "orders.png";
  orderIconActive = this.icon +  "orders_active.png";
  staffIcon = this.icon + "members.png";
  staffIconActive = this.icon + "members_active.png";
  settingIcon = this.icon + "setting.png";
  settingIconActive = this.icon + "setting_active.png";
  addOrderIcon = this.icon + "add_order.png";
  logoutIcon = this.icon + "logout.png";

  constructor(private router: Router) {}

  ngOnInit() {
  }

  gotofunc(routeAddress: string){
    this.router.navigate(["/" + routeAddress ])
  }
}
