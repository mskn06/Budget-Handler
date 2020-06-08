import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { CONSTANTS } from "../../../apiConstants";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    return this.http.get(CONSTANTS.GETPROJECTS);
  }

  postProject(project) {
    console.log("project", project);
    return this.http.post<any>(CONSTANTS.ADDPROJECT, project);
  }
}
