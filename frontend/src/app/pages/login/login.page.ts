import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  private user: FormGroup;
  userData;
  loading = false;
  submitted = false;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.user = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  ngOnInit() {}

  async login() {
    this.submitted = true;

    if (this.user.invalid) {
      console.log("Fill valid details!");
      return;
    }

    if (this.user.value) {
      this.loading = true;

      this.userData = await this.loginService
        .login(this.user.value)
        .pipe(first())
        .subscribe(
          (data) => {
            console.log("user", data);
            if (data) this.router.navigate(["/user/" + data._id + "/projects"]);
          },
          (err) => {
            console.log(err);
            this.loading = false;
          }
        );
    }
  }
}
