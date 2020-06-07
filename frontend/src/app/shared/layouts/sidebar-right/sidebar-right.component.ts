import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-sidebar-right",
  templateUrl: "./sidebar-right.component.html",
  styleUrls: ["./sidebar-right.component.scss"],
})
export class SidebarRightComponent implements OnInit {
  currentUser;
  user;
  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
    this.userService.getUser(this.currentUser).subscribe((userItem) => {
      this.user = userItem.data;
      // console.log("user", this.user);
    });
  }
}
