import { Order } from "./order-interface";

export interface Staff {
  staffName: string;
  paid: number; //amtUsed
  earned: number; //amtEarned
  projects: number;
  toPay: number;
  paidOn: Date;
  orderDetails?: Order[];
}
