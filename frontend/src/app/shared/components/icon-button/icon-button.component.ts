import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-icon-button",
  templateUrl: "./icon-button.component.html",
  styleUrls: ["./icon-button.component.scss"]
})
export class IconButtonComponent implements OnInit {
 @Input() class;
 @Input() icon;
  constructor() {}

  ngOnInit() {}
}
