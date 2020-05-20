import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'group',
  template: `
  <div class="mypanel">
    <div class="title" (click)="toggle.emit()">
      {{title}}
    </div>
    <div class="body" [ngClass]="{'hidden': !opened}">
      <ng-content></ng-content>
    </div>
  <div>
  `,
  styleUrls: ['accordion.component.scss'],
})
export class AccordionGroupComponent {
  @Input() opened = false;
  @Input() title: string;

  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();


}
