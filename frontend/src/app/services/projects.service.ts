import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { CONSTANTS } from "../../../apiConstants";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getProjects(userId): Observable<any> {
    return this.http.get(CONSTANTS.GETPROJECTS(userId));
  }

  postProject(userId, project) {
    console.log("project", project);
    return this.http.post<any>(CONSTANTS.ADDPROJECT(userId), project);
  }
}
