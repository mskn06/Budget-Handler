import { Project } from "./project-interface";
import { Staff } from "./staff-interface";

export interface User {
  profile: {
    userName: String;
    password: String;
    email: String;
    clearanceTime: Number;
  };
  payment: {
    projectCount?: Number;
    amtToBePaid?: Number;
    amtPaid?: Number;
    amtCleared?: Number;
    amtInClearance?: Number;
    amtEarned?: Number;
  };
  staffs?: Staff[];
  projects?: Project[];
}
