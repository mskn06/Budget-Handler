
export interface Order {
    projectName: string;
    deliveryDate: Date;
    earning: number;
    expense: number;
    status: string;
    staffDetails: staffDetails[];
  }
  
  interface staffDetails {
    staffName: string;
    amount: number;
    paidOn: Date;
  }
  