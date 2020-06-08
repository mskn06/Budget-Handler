import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-sidebar-left",
  templateUrl: "./sidebar-left.component.html",
  styleUrls: ["./sidebar-left.component.scss"],
})
export class SidebarLeftComponent implements OnInit {
  @Input() pageName;
  private userId;

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

  constructor(
    private router: Router,
    private loginService: LoginService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  gotofunc(routeAddress: string) {
    this.route.params.subscribe((params) => {
      this.userId = params.userId;
    });
    let r = "/user/" + this.userId + "/" + routeAddress;
    // console.log(r);
    this.router.navigate([r]);
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
