import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user-interface";
import { first } from "rxjs/operators";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-setting",
  templateUrl: "./setting.page.html",
  styleUrls: ["./setting.page.scss"],
})
export class SettingPage implements OnInit {
  user: User;
  currentUser;
  userForm: FormGroup;
  submitted;
  loading;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    // logged in user
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

    this.userForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
      email: ["", Validators.required],
      clearanceTime: ["", Validators.required],
    });
  }

  ngOnInit() {
    this.userService.getUser(this.currentUser).subscribe((userItem) => {
      this.user = userItem.data.profile;
      console.log("user", userItem.data.profile);
    });
  }

  async updateUser() {
    this.submitted = true;

    if (this.userForm.invalid) {
      console.log("Fill valid details!");
      return;
    }

    if (this.userForm.value) {
      this.loading = true;

      await this.userService
        .updateUser(this.userForm.value, this.currentUser)
        .pipe(first())
        .subscribe(
          (data) => {
            // console.log("user", data);
          },
          (err) => {
            console.log(err);
            this.loading = false;
          }
        );

      console.log("user after update", this.user);
    }
  }
}
