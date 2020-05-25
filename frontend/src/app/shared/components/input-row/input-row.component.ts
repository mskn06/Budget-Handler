import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-row',
  templateUrl: './input-row.component.html',
  styleUrls: ['./input-row.component.scss'],
})
export class InputRowComponent implements OnInit {

  @Input() placeholder;
  constructor() { }

  ngOnInit() {}

}
