import { Component, OnInit } from "@angular/core";
import { Project } from "../../models/project-interface";
import { ProjectService } from "../../services/projects.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.page.html",
  styleUrls: ["./projects.page.scss"],
})
export class ProjectsPage implements OnInit {
  projects: Project[];

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}
  private userId;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params.userId;
    });
    this.projectService.getProjects(this.userId).subscribe((projects) => {
      this.projects = projects.data;
      console.log("projects", this.projects);
    });
  }
}
