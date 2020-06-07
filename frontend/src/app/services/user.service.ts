import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { CONSTANTS } from "../../../apiConstants";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(currentUser): Observable<any> {
    return this.http.get(CONSTANTS.GETUSER + currentUser._id);
  }

  updateUser(user, currentUser) {
    return this.http
      .post<any>(CONSTANTS.UPDATEUSER + currentUser._id, user)
      .pipe(
        map((userData) => {
          if (userData) {
            // console.log(userData);
            localStorage.setItem("currentUser", JSON.stringify(userData.item));
          }
          return userData.item;
        })
      );
  }
}
