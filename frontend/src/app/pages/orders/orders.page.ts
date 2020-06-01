import { Component, OnInit } from "@angular/core";
import { Order } from "../../models/order-interface";
import { OrderService } from "../../services/orders.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.page.html",
  styleUrls: ["./orders.page.scss"],
})
export class OrdersPage implements OnInit {
  orders = Orders;
  order;

  constructor(private orderService: OrderService) {}
  ngOnInit() {
    this.orderService.getOrders().subscribe((orders) => {
      this.order = orders;
      console.log("orders", this.order);
    });
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
