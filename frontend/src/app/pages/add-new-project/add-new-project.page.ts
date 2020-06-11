import { Component, OnInit } from "@angular/core";
import { ProjectService } from "src/app/services/projects.service";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-add-new-project",
  templateUrl: "./add-new-project.page.html",
  styleUrls: ["./add-new-project.page.scss"],
})
export class AddNewProjectPage implements OnInit {
  icon = "../../../../assets/icon/";
  addProjectIcon = this.icon + "add_project.png";
  count = 0;
  projectForm: FormGroup;
  private userId;
  staffList;

  constructor(
    private projectService: ProjectService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      projectName: ["", Validators.required],
      totalAmount: ["", Validators.required],
      delivery: ["", Validators.required],
      staff: this.formBuilder.array([this.initStaff()]),
    });

    this.route.params.subscribe((params) => {
      this.userId = params.userId;
    });

    this.userService.getStaffList(this.userId).subscribe((data) => {
      this.staffList = data;
      console.log("data stafflist", this.staffList);
    });
  }

  initStaff() {
    return this.formBuilder.group({
      staffName: [""],
      amtToBePaid: [""],
    });
  }
  addStaff() {
    const control = <FormArray>this.projectForm.get("staff");
    // console.log(control);
    control.push(this.initStaff());
  }

  getStaff(form) {
    return form.controls.staff.controls;
  }

  // checkerror(projectForm) {
  //   if (projectForm.invalid) {
  //     console.log("Fill valid details!");
  //     return true;
  //   }

  //   projectForm.value.staff.forEach((element) => {
  //     if (element.staffName == "" || element.amtToBePaid == "") {
  //       console.log("Fill valid details!");
  //       return true;
  //     }
  //   });

  //   return false;
  // }

  async submit() {
    console.log(this.projectForm.value);
    if (this.projectForm.invalid) {
      console.log("Fill valid details!");
      return;
    }

    await this.projectForm.value.staff.forEach((element) => {
      if (element.staffName == "" || element.amtToBePaid == "") {
        console.log("Fill valid details!");
        return;
      }
    });

    if (this.projectForm.value) {
      await this.projectService
        .postProject(this.userId, this.projectForm.value)
        .subscribe(
          (data) => {
            console.log("project", data);

            this.router.navigate(["/user/" + this.userId + "/projects"]);
          },
          (err) => {
            console.log(err);
          }
        );

      // console.log("user after update", this.project);
    }
  }
}
