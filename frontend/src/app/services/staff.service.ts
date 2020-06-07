import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { CONSTANTS } from "../../../apiConstants";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StaffService {
  constructor(private http: HttpClient) {}

  getStaffs(): Observable<any> {
    return this.http.get(CONSTANTS.GETSTAFFS);
  }

  postStaff(staff) {
    return this.http.post(CONSTANTS.ADDSTAFF, staff);
  }
}
