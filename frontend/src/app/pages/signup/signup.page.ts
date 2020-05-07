import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"]
})
export class SignupPage implements OnInit {
  loginBtnName = "LOGIN";
  signupBtnName = "SIGNUP";
  loginBtn = "btn-login btn-raised";
  signupBtn = "btn-signup btn-pressed";
  SIGNUP = "SIGN UP";
  primaryBtn = "btn-primary";

  constructor() {}

  ngOnInit() {}
}
