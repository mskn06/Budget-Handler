import { Order } from "./order-interface";

export interface User {
  name: String;
  password: String;
  email: String;
  clearanceTime: Number;
  totalOrders?: Number;
  amtToBePaid?: Number;
  amtUsed?: Number;
  amtCleared?: Number;
  amtInClearance?: Number;
  amtEarned?: Number;

  staff?: String[];
  orders?: Order[];
}

// username: string;
// password: string;
// email: string;
// clearanceTime: string;
// orderDetails: Order[];
// staffDetails: Staff[];
