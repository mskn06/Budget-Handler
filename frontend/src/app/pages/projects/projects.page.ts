import { Component, OnInit } from "@angular/core";
import { Project } from "../../models/project-interface";
import { ProjectService } from "../../services/projects.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.page.html",
  styleUrls: ["./projects.page.scss"],
})
export class ProjectsPage implements OnInit {
  projects = Projects;
  project: Project;

  constructor(private projectService: ProjectService) {}
  ngOnInit() {
    this.projectService.getProjects().subscribe((projects) => {
      this.project = projects.data;
      console.log("projects", this.project);
    });
  }
}

var Projects: Project[] = [];
