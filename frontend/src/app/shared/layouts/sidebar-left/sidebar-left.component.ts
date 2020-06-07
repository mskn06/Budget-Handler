import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-sidebar-left",
  templateUrl: "./sidebar-left.component.html",
  styleUrls: ["./sidebar-left.component.scss"],
})
export class SidebarLeftComponent implements OnInit {
  @Input() pageName;

  // data sent to component
  pressed = "pressed";
  raised = "raised";
  primaryPressed = "primary-pressed";
  primaryRaised = "primary-raised";

  // icons
  icon = "../../../../assets/icon/";
  projectIcon = this.icon + "projects.png";
  projectIconActive = this.icon + "projects_active.png";
  staffIcon = this.icon + "members.png";
  staffIconActive = this.icon + "members_active.png";
  settingIcon = this.icon + "setting.png";
  settingIconActive = this.icon + "setting_active.png";
  addProjectIcon = this.icon + "add_project.png";
  logoutIcon = this.icon + "logout.png";

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {}

  gotofunc(routeAddress: string) {
    this.router.navigate(["/" + routeAddress]);
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
