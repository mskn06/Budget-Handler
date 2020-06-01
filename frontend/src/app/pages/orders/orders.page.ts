import { Component, OnInit } from "@angular/core";
import { Order } from "../../models/order-interface";
import { GetAllOrdersService } from "../../services/order/get-all-orders.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.page.html",
  styleUrls: ["./orders.page.scss"],
})
export class OrdersPage implements OnInit {
  orders = Orders;
  order;

  constructor(private getAllOrders: GetAllOrdersService) {}
  ngOnInit() {
    this.getAllOrders.getOrders().subscribe((result) => {
      this.order = result;
      console.log("orders", this.order);
      debugger
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
