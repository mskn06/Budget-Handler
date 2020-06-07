import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from "@angular/core";
import { AccordionGroupComponent } from "./accordion-group.component";

@Component({
  selector: "accordion",
  template: ` <ng-content></ng-content> `,
  styleUrls: ["./accordion.component.scss"],
})
export class AccordionComponent implements AfterContentInit {
  @ContentChildren(AccordionGroupComponent)
  groups: QueryList<AccordionGroupComponent>;

  ngAfterContentInit() {
    // console.log(this.groups);

    this.groups.toArray().forEach((t) => {
      t.toggle.subscribe(() => {
        this.openGroup(t);
      });
    });
  }

  openGroup(group) {
    if (group.opened == true) {
      this.groups.toArray().forEach((t) => (t.opened = false));
    } else {
      this.groups.toArray().forEach((t) => (t.opened = false));
      group.opened = true;
    }
  }
}
