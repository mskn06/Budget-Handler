import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-new-order",
  templateUrl: "./add-new-order.page.html",
  styleUrls: ["./add-new-order.page.scss"],
})
export class AddNewOrderPage implements OnInit {
  icon = "../../../../assets/icon/";
  addOrderIcon = this.icon + "add_order.png";
  count = 0;
  
  constructor() {}

  ngOnInit() {}

  addStaff() {
    this.count++;
  }
}
