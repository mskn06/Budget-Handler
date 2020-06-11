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
    return this.http.get(CONSTANTS.GETUSER(currentUser));
  }

  getStaffList(userId) {
    return this.http.get(CONSTANTS.GETSTAFFLIST(userId));
  }

  updateUser(user, currentUser) {
    return this.http.post<any>(CONSTANTS.UPDATEUSER(currentUser), user).pipe(
      map((userData) => {
        if (userData) {
          console.log("userData", userData);
          localStorage.setItem("currentUser", userData.item._id);
        }
        return userData.item;
      })
    );
  }
}
