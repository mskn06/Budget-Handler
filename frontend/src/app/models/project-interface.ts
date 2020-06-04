export interface Project {
  profile: {
    projectName: String;
    delivery: Date;
    status?: String;
    clearanceTime?: Number;
  };
  payment: {
    totalAmount: Number;
    amtToBePaid?: Number;
    amtPaid?: Number;
    amtCleared?: Number;
    amtInClearance?: Number;
    amtEarned?: Number;
  };
  staffs?: Staff[];
}

interface Staff {
  profile: {
    staffName: String;
  };
  payment: {
    amtToBePaid: Number;
    amtPaid?: Number;
    paidOn?: Date;
  };
}
