import { Staff } from "./staff-interface";

export interface Order {
    projectName: string;
    deliveryDate: Date;
    earning: number;   //amtEarned
    expense: number;    //amtUsed
    status: string;
    paidOn: Date;
    staffDetails?: Staff[];
  }
  