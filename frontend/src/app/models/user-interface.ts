import {Order} from "./order-interface";
import { Staff } from "./staff-interface";

export interface User {
  username: string;
  password: string;
  email: string;
  clearanceTime: string;
  orderDetails: Order[];
  staffDetails: Staff[];
}
