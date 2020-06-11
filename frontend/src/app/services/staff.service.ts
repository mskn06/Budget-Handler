import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { CONSTANTS } from "../../../apiConstants";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StaffService {
  constructor(private http: HttpClient) {
    // this.getStaffs(userId)
  }

  getStaffs(userId): Observable<any> {
    return this.http.get(CONSTANTS.GETSTAFFS(userId));
  }

  postStaff(userId, staff) {
    return this.http.post(CONSTANTS.ADDSTAFF(userId), staff);
  }
}
