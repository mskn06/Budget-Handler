import { Component, OnInit } from "@angular/core";
import { pages } from "../../../../data/data";

@Component({
  selector: "app-sidebar-left",
  templateUrl: "./sidebar-left.component.html",
  styleUrls: ["./sidebar-left.component.scss"]
})
export class SidebarLeftComponent implements OnInit {
  pages = pages;
  constructor() {}

  ngOnInit() {
    console.log(pages);
  }
}
