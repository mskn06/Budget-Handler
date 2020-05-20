import { Component, OnInit } from "@angular/core";
import {User} from "../../models/user-interface"
@Component({
  selector: "app-orders",
  templateUrl: "./orders.page.html",
  styleUrls: ["./orders.page.scss"],
})
export class OrdersPage implements OnInit {
  user = Users;

  constructor() {}
  ngOnInit() {
    console.log("user" + this.user)
  }
}

var Users: User[] = [{
  username: "Santa Singh",
  password: "12345678",
  email: "santasingh@gmail.com",
  clearanceTime: "21 days",
  orderDetails: [{
    projectName: "React Project",
    deliveryDate: new Date,
    earning: 400,
    expense: 100,
    status: "Pending"
  }],
    staffDetails: [
      {
        staffName: "John Doe",
        paid: 300,
        earned: 600,
        projects: 6,
        toPay: 100
      },
      
    ],
  }
]