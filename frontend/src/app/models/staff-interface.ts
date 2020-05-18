
export interface Staff {
    memberName: string;
    paid: number;
    earned: number;
    projects: number;
    toPay: string;
    projectDetails:ProjectDetails[];
  }
  
  interface ProjectDetails {
    projectName: string;
    paid: number;
    earned: number;
    paidOn: Date;
  }
  