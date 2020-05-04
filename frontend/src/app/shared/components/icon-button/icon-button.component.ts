import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-icon-button",
  templateUrl: "./icon-button.component.html",
  styleUrls: ["./icon-button.component.scss"]
})
export class ButtonPressedComponent implements OnInit {
  icon: any = "../../../../assets/icon/orders.png";

  constructor() {}

  ngOnInit() {}
}
