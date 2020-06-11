import { Component, OnInit, OnDestroy } from "@angular/core";
import { Project } from "../../models/project-interface";
import { ProjectService } from "../../services/projects.service";
import {
  ActivatedRoute,
  Router,
  RouterEvent,
  NavigationEnd,
} from "@angular/router";
import { filter, takeUntil } from "rxjs/operators";
import { ReplaySubject } from "rxjs";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.page.html",
  styleUrls: ["./projects.page.scss"],
})
export class ProjectsPage implements OnInit, OnDestroy {
  projects: Project[];
  private userId;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.userId = params.userId;
    });
  }
  ngOnInit() {
    this.router.events
      .pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        this.getProjects();
      });
  }

  ngOnDestroy(): void {
    // console.log("done with");
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  getProjects() {
    this.projectService.getProjects(this.userId).subscribe((projects) => {
      this.projects = projects;
      console.log("projects", this.projects);
    });
  }

  async payStaff(project, staff) {
    console.log("project", project);
    console.log("staff", staff);
    await this.projectService
      .payStaff(this.userId, project, staff)
      .subscribe((data) => {
        console.log("paid staff", data);
        this.getProjects();
      });
  }
}
