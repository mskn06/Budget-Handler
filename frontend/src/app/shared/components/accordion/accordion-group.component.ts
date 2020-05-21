import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "group",
  templateUrl: "accordion-group.component.html",
  styleUrls: ["accordion.component.scss"],
})
export class AccordionGroupComponent {
  @Input() opened = false;
  @Input() row: any;

  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
}
