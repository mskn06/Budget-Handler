import { Project } from "./project-interface";

export interface User {
  name: String;
  password: String;
  email: String;
  clearanceTime: Number;
  totalProjects?: Number;
  amtToBePaid?: Number;
  amtUsed?: Number;
  amtCleared?: Number;
  amtInClearance?: Number;
  amtEarned?: Number;

  staff?: String[];
  projects?: Project[];
}

// username: string;
// password: string;
// email: string;
// clearanceTime: string;
// projectDetails: Project[];
// staffDetails: Staff[];
