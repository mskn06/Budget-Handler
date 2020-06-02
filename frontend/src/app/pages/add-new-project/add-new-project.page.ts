import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-new-project",
  templateUrl: "./add-new-project.page.html",
  styleUrls: ["./add-new-project.page.scss"],
})
export class AddNewProjectPage implements OnInit {
  icon = "../../../../assets/icon/";
  addProjectIcon = this.icon + "add_project.png";
  count = 0;

  constructor() {}

  ngOnInit() {}

  addStaff() {
    this.count++;
  }
}
