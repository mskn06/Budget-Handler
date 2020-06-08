import { Component, OnInit } from "@angular/core";
import { Staff } from "src/app/models/staff-interface";
import { StaffService } from "src/app/services/staff.service";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-staff",
  templateUrl: "./staff.page.html",
  styleUrls: ["./staff.page.scss"],
})
export class StaffPage implements OnInit {
  staffs: Staff[];
  staffForm;

  constructor(private staffService: StaffService, private fb: FormBuilder) {
    this.staffForm = this.fb.group({
      staffName: ["", Validators.required],
    });
  }

  ngOnInit() {
    this.staffService.getStaffs().subscribe((staffs) => {
      this.staffs = staffs.data;
      console.log("staffs", this.staffs);
    });
  }

  async postStaff() {
    if (this.staffForm.invalid) {
      console.log("fill staff name!");
      return;
    }

    await this.staffService
      .postStaff(this.staffForm.value)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
