import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-sidebar-right",
  templateUrl: "./sidebar-right.component.html",
  styleUrls: ["./sidebar-right.component.scss"],
})
export class SidebarRightComponent implements OnInit {
  private userId;
  user;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params.userId;
    });

    this.userService.getUser(this.userId).subscribe((userItem) => {
      this.user = userItem.data;
      // console.log("user", this.user);
    });
  }
}
