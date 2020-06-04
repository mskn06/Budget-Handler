export interface Staff {
  profile: {
    staffName: String;
    projectCount?: Number;
  };
  payment: {
    amtToBePaid?: Number;
    amtPaid?: Number;
    projectPercentage?: Number;
  };
  projects?: Project[];
}

interface Project {
  profile: {
    projectName: String;
  };
  payment: {
    amtToBePaid: Number;
    amtPaid?: Number;
    projectPercentage?: Number;
  };
}
