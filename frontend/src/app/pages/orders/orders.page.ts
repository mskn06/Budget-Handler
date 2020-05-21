import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user-interface";
@Component({
  selector: "app-orders",
  templateUrl: "./orders.page.html",
  styleUrls: ["./orders.page.scss"],
})
export class OrdersPage implements OnInit {
  users = Users;

  constructor() {}
  ngOnInit() {
    console.log("user", this.users);
  }
}

var Users: User[] = [
  {
    username: "John Doe",
    password: "12345678",
    email: "johndoe1234@gmail.com",
    clearanceTime: "21 days",
    orderDetails: [
      {
        projectName: "React Project",
        deliveryDate: new Date(),
        earning: 400,
        expense: 100,
        status: "Pending",
      },
    ],
    staffDetails: [
      {
        staffName: "Bill Mane",
        paid: 300,
        earned: 600,
        projects: 6,
        toPay: 100,
      },
    ],
  },
  {
    username: "John Doe",
    password: "12345678",
    email: "johndoe1234@gmail.com",
    clearanceTime: "21 days",
    orderDetails: [
      {
        projectName: "React",
        deliveryDate: new Date(),
        earning: 400,
        expense: 100,
        status: "Pending",
      },
    ],
    staffDetails: [
      {
        staffName: "Bill Mane",
        paid: 300,
        earned: 600,
        projects: 6,
        toPay: 100,
      },
    ],
  },
  {
    username: "John Doe",
    password: "12345678",
    email: "johndoe1234@gmail.com",
    clearanceTime: "21 days",
    orderDetails: [
      {
        projectName: "React Project",
        deliveryDate: new Date(),
        earning: 400,
        expense: 100,
        status: "Pending",
      },
    ],
    staffDetails: [
      {
        staffName: "Bill Mane",
        paid: 300,
        earned: 600,
        projects: 6,
        toPay: 100,
      },
    ],
  },
];
