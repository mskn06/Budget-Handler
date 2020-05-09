import { Component, OnInit, Input } from "@angular/core";
// import { page } from "../../../../data/data";

@Component({
  selector: "app-icon-button",
  templateUrl: "./icon-button.component.html",
  styleUrls: ["./icon-button.component.scss"]
})
export class IconButtonComponent implements OnInit {
  @Input() icon;
  // @Input() pageName;

  constructor() {}

  ngOnInit() {}
}
