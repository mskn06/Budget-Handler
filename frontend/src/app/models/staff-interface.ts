import { Order } from "./order-interface";

export interface Staff {
  staffName: String;
  amtToBePaid?: Number;
  amtPaid?: Number;
  amtEarned?: Number;
  projects?: Number;
  orders?: Order[];
}

// staffName: string;
// paid: number; //amtUsed
// earned: number; //amtEarned
// projects: number;
// toPay: number;
// paidOn: Date;
// orderDetails?: Order[];
