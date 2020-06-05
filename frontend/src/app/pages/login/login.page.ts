import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  private user: FormGroup;
  userData;

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

  login() {
    console.log(this.user.value);
    if (this.user.value) {
      this.userData = this.loginService.getUser(this.user.value);
      this.router.navigate(["/projects"]);
    }
  }
}
