import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { CONSTANTS } from "../../../apiConstants";
// import { Observable } from "rxjs";
import { User } from "../models/user-interface";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<User>(CONSTANTS.LOGIN);
  }
}
