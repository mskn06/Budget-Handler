import { Project } from "./project-interface";

export interface Staff {
  staffName: String;
  amtToBePaid?: Number;
  amtPaid?: Number;
  amtEarned?: Number;
  projects?: Number;
  // projects?: Order[];
}

// staffName: string;
// paid: number; //amtUsed
// earned: number; //amtEarned
// projects: number;
// toPay: number;
// paidOn: Date;
// projectDetails?: Order[];
