import { Staff } from "./staff-interface";

export interface Project {
  projectName: String;
  deliveryDate: Date;
  totalAmount: Number;
  amtToBePaid?: Number;
  amtUsed?: Number;
  amtCleared?: Number;
  amtInClearance?: Number;
  amtEarned?: Number;
  status: String;
  staffs?: Staff[];
}
