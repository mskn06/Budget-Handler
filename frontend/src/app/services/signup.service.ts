import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { CONSTANTS } from "../../../apiConstants";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SignupService {
  constructor(private http: HttpClient) {}

  postUser(): Observable<any> {
    return this.http.post(CONSTANTS.SIGNUP, "body");
  }
}
