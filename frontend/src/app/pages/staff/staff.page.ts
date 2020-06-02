import { Component, OnInit } from "@angular/core";
import { Staff } from "src/app/models/staff-interface";

@Component({
  selector: "app-staff",
  templateUrl: "./staff.page.html",
  styleUrls: ["./staff.page.scss"],
})
export class StaffPage implements OnInit {
  staffs = StaffMembers;

  constructor() {}

  ngOnInit() {
    console.log("user", this.staffs);
  }
}

var StaffMembers: Staff[] = [];
