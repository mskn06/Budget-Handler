import { Component, OnInit } from "@angular/core";
import { Staff } from "src/app/models/staff-interface";
import { StaffService } from "src/app/services/staff.service";

@Component({
  selector: "app-staff",
  templateUrl: "./staff.page.html",
  styleUrls: ["./staff.page.scss"],
})
export class StaffPage implements OnInit {
  staffs: Staff[];

  constructor(private staffService: StaffService) {}

  ngOnInit() {
    this.staffService.getStaffs().subscribe((staffs) => {
      this.staffs = staffs.data;
      console.log("staffs", this.staffs);
    });
  }
}
