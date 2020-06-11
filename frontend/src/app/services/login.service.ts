import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { CONSTANTS } from "../../../apiConstants";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(user) {
    return this.http.post<any>(CONSTANTS.LOGIN(), user).pipe(
      map((userData) => {
        if (userData) {
          // console.log(userData);
          localStorage.setItem("currentUser", userData.data._id);
        }
        return userData.data;
      })
    );
  }

  logout() {
    localStorage.removeItem("currentUser");
  }
}
