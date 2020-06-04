import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  private user: FormGroup;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {
    this.user = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  ngOnInit() {}

  login() {
    this.loginService.getUser().subscribe((user) => {
      console.log("logging in user: ", user);
    });
  }
}
