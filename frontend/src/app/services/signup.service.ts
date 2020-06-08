import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { CONSTANTS } from "../../../apiConstants";
import { Observable } from "rxjs";
import { User } from "../models/user-interface";

@Injectable({
  providedIn: "root",
})
export class SignupService {
  constructor(private http: HttpClient) {}

  postUser(user) {
    console.log("user", user);
    return this.http.post(CONSTANTS.SIGNUP, user);
  }
}
