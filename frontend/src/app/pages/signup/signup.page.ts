import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SignupService } from "src/app/services/signup.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  userForm: FormGroup;
  constructor(
    private signupService: SignupService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      userName: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  signup() {
    if (this.userForm.invalid) {
      console.log("fill all details!");
      return;
    }

    console.log(this.userForm.value);

    this.signupService.postUser(this.userForm.value).subscribe(
      (data) => {
        console.log("user created", data);
        this.router.navigate(["/login"]);
      },
      (err) => {
        console.log("err", err);
      }
    );
  }
}
