import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  loginBtnName = "LOGIN";
  signupBtnName = "SIGNUP";
  loginBtn = "btn-login btn-pressed";
  signupBtn = "btn-signup btn-raised";
  SIGNUP = "LOGIN";
  primaryBtn = "btn-primary";

  constructor() {}

  ngOnInit() {}
}
