import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { CONSTANTS } from "../../../apiConstants";
// import { Observable } from "rxjs";
import { User } from "../models/user-interface";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  getUser(user) {
    return this.http.post<any>(CONSTANTS.LOGIN, user).pipe(
      map((userData) => {
        if (userData) {
          // console.log(userData);
          localStorage.setItem("currentUser", JSON.stringify(userData.data));
        }
        return userData.data;
      })
    );
  }

  logout() {
    localStorage.removeItem("currentUser");
  }
}
