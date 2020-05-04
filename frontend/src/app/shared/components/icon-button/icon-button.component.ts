import { Component, OnInit, Input } from "@angular/core";
// import { page } from "../../../../data/data";

@Component({
  selector: "app-icon-button",
  templateUrl: "./icon-button.component.html",
  styleUrls: ["./icon-button.component.scss"]
})
export class ButtonPressedComponent implements OnInit {
  @Input() icon;

  constructor() {}

  ngOnInit() {}
}
