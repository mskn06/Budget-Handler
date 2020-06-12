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
  user;
  currentUser;
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    // logged in user
    this.currentUser = localStorage.getItem("currentUser");

    this.userForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
      email: ["", Validators.required],
      clearanceTime: ["", Validators.required],
    });
  }

  ngOnInit() {
    this.userService.getUser(this.currentUser).subscribe((userItem) => {
      console.log("useritem", userItem);
      this.user = userItem.data.profile;
    });
  }

  async updateUser() {
    if (this.userForm.invalid) {
      console.log("Fill valid details!");
      return;
    }

    if (this.userForm.value) {
      await this.userService
        .updateUser(this.userForm.value, this.currentUser)
        .pipe(first())
        .subscribe(
          (data) => {
            // console.log("user", data);
          },
          (err) => {
            console.log(err);
          }
        );

      console.log("user after update", this.user);
    }
  }
}
