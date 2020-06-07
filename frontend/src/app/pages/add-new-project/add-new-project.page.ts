import { Component, OnInit } from "@angular/core";
import { ProjectService } from "src/app/services/projects.service";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

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

  constructor(
    private projectService: ProjectService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      projectName: ["", Validators.required],
      totalAmount: ["", Validators.required],
      delivery: ["", Validators.required],
      staff: this.formBuilder.array([this.initStaff()]),
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

  async submit() {
    if (this.projectForm.invalid) {
      console.log("Fill valid details!");
      return;
    }

    if (this.projectForm.value) {
      await this.projectService
        .postProject(this.projectForm.value)
        .pipe(first())
        .subscribe(
          (data) => {
            console.log("project", data);
            this.router.navigate(["/projects"]);
          },
          (err) => {
            console.log(err);
          }
        );

      // console.log("user after update", this.project);
    }
  }
}
