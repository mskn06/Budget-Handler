import { Component, OnInit } from "@angular/core";
import { Order } from "../../models/order-interface";
@Component({
  selector: "app-orders",
  templateUrl: "./orders.page.html",
  styleUrls: ["./orders.page.scss"],
})
export class OrdersPage implements OnInit {
  orders = Orders;

  constructor() {}
  ngOnInit() {
    console.log("orders", this.orders);
  }
}

var Orders: Order[] = [
  {
    projectName: "React Project ",
    deliveryDate: new Date(),
    earning: 400,
    expense: 100,
    status: "pending",
    paidOn: new Date(),
    staffDetails: [
      {
        staffName: "John Doe",
        paid: 400,
        earned: 100,
        projects: 7,
        toPay: 0,
        paidOn: new Date(),
      },
      {
        staffName: "John Doe",
        paid: 400,
        earned: 100,
        projects: 7,
        toPay: 0,
        paidOn: new Date(),
      },
    ],
  },
  {
    projectName: "React Project ",
    deliveryDate: new Date(),
    earning: 400,
    expense: 100,
    status: "pending",
    paidOn: new Date(),
    staffDetails: [
      {
        staffName: "John Doe",
        paid: 400,
        earned: 100,
        projects: 7,
        toPay: 0,
        paidOn: new Date(),
      },
      {
        staffName: "John Doe",
        paid: 400,
        earned: 100,
        projects: 7,
        toPay: 0,
        paidOn: new Date(),
      },
    ],
  },
  {
    projectName: "React Project ",
    deliveryDate: new Date(),
    earning: 400,
    expense: 100,
    status: "pending",
    paidOn: new Date(),
    staffDetails: [
      {
        staffName: "John Doe",
        paid: 400,
        earned: 100,
        projects: 7,
        toPay: 0,
        paidOn: new Date(),
      },
      {
        staffName: "John Doe",
        paid: 400,
        earned: 100,
        projects: 7,
        toPay: 0,
        paidOn: new Date(),
      },
    ],
  },
  {
    projectName: "React Project ",
    deliveryDate: new Date(),
    earning: 400,
    expense: 100,
    status: "pending",
    paidOn: new Date(),
    staffDetails: [
      {
        staffName: "John Doe",
        paid: 400,
        earned: 100,
        projects: 7,
        toPay: 0,
        paidOn: new Date(),
      },
      {
        staffName: "John Doe",
        paid: 400,
        earned: 100,
        projects: 7,
        toPay: 0,
        paidOn: new Date(),
      },
    ],
  },
  {
    projectName: "React Project ",
    deliveryDate: new Date(),
    earning: 400,
    expense: 100,
    status: "pending",
    paidOn: new Date(),
    staffDetails: [
      {
        staffName: "John Doe",
        paid: 400,
        earned: 100,
        projects: 7,
        toPay: 0,
        paidOn: new Date(),
      },
      {
        staffName: "John Doe",
        paid: 400,
        earned: 100,
        projects: 7,
        toPay: 0,
        paidOn: new Date(),
      },
    ],
  },
  {
    projectName: "React Project ",
    deliveryDate: new Date(),
    earning: 400,
    expense: 100,
    status: "pending",
    paidOn: new Date(),
    staffDetails: [
      {
        staffName: "John Doe",
        paid: 400,
        earned: 100,
        projects: 7,
        toPay: 0,
        paidOn: new Date(),
      },
      {
        staffName: "John Doe",
        paid: 400,
        earned: 100,
        projects: 7,
        toPay: 0,
        paidOn: new Date(),
      },
    ],
  },
  {
    projectName: "React Project ",
    deliveryDate: new Date(),
    earning: 400,
    expense: 100,
    status: "pending",
    paidOn: new Date(),
    staffDetails: [
      {
        staffName: "John Doe",
        paid: 400,
        earned: 100,
        projects: 7,
        toPay: 0,
        paidOn: new Date(),
      },
      {
        staffName: "John Doe",
        paid: 400,
        earned: 100,
        projects: 7,
        toPay: 0,
        paidOn: new Date(),
      },
    ],
  },
  {
    projectName: "React Project ",
    deliveryDate: new Date(),
    earning: 400,
    expense: 100,
    status: "pending",
    paidOn: new Date(),
    staffDetails: [
      {
        staffName: "John Doe",
        paid: 400,
        earned: 100,
        projects: 7,
        toPay: 0,
        paidOn: new Date(),
      },
      {
        staffName: "John Doe",
        paid: 400,
        earned: 100,
        projects: 7,
        toPay: 0,
        paidOn: new Date(),
      },
    ],
  },
  {
    projectName: "React Project ",
    deliveryDate: new Date(),
    earning: 400,
    expense: 100,
    status: "pending",
    paidOn: new Date(),
    staffDetails: [
      {
        staffName: "John Doe",
        paid: 400,
        earned: 100,
        projects: 7,
        toPay: 0,
        paidOn: new Date(),
      },
      {
        staffName: "John Doe",
        paid: 400,
        earned: 100,
        projects: 7,
        toPay: 0,
        paidOn: new Date(),
      },
    ],
  },
  {
    projectName: "React Project ",
    deliveryDate: new Date(),
    earning: 400,
    expense: 100,
    status: "pending",
    paidOn: new Date(),
    staffDetails: [
      {
        staffName: "John Doe",
        paid: 400,
        earned: 100,
        projects: 7,
        toPay: 0,
        paidOn: new Date(),
      },
      {
        staffName: "John Doe",
        paid: 400,
        earned: 100,
        projects: 7,
        toPay: 0,
        paidOn: new Date(),
      },
    ],
  },
];
