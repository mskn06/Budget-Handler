const api = "http://localhost:3000";

export const CONSTANTS = {
  SIGNUP() {
    return `${api}/signup`;
  },
  LOGIN() {
    return `${api}/login`;
  },
  GETUSER(userId) {
    return `${api}/user/${userId}`;
  },
  UPDATEUSER(userId) {
    return `${api}/user/${userId}`;
  },
  ADDPROJECT(userId) {
    return `${api}/user/${userId}/project/`;
  },
  GETPROJECTS(userId) {
    return `${api}/user/${userId}/project/`;
  },
  ADDSTAFF(userId) {
    return `${api}/user/${userId}/staff`;
  },
  GETSTAFFS(userId) {
    return `${api}/user/${userId}/staff`;
  },
  GETSTAFFLIST(userId) {
    return `${api}/user/${userId}/staffList`;
  },
  PAYSTAFF(userId) {
    return `${api}/user/${userId}/payStaff`;
  },
};
