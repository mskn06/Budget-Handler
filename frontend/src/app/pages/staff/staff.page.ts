import { Component, OnInit } from "@angular/core";
import { Staff } from "src/app/models/staff-interface";
import { StaffService } from "src/app/services/staff.service";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-staff",
  templateUrl: "./staff.page.html",
  styleUrls: ["./staff.page.scss"],
})
export class StaffPage implements OnInit {
  staffs: Staff[];
  staffForm;
  private userId;

  constructor(
    private staffService: StaffService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.staffForm = this.fb.group({
      staffName: ["", Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params.userId;
    });

    this.staffService.getStaffs(this.userId).subscribe((staffs) => {
      this.staffs = staffs;
      console.log("staffs", this.staffs);
    });
  }

  async postStaff() {
    if (this.staffForm.invalid) {
      console.log("fill staff name!");
      return;
    }

    await this.staffService
      .postStaff(this.userId, this.staffForm.value)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(["/user/" + this.userId + "/staff"]);
      });
  }
}
