import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-primary-button",
  templateUrl: "./primary-button.component.html",
  styleUrls: ["./primary-button.component.scss"]
})
export class ButtonRaisedComponent implements OnInit {
  buttonName: string = "SAVE";
  constructor() {}

  ngOnInit() {}
}
