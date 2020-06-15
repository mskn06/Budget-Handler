export const CONSTANTS = {
  SIGNUP() {
    return `/signup`;
  },
  LOGIN() {
    return `/login`;
  },
  GETUSER(userId) {
    return `/user/${userId}`;
  },
  UPDATEUSER(userId) {
    return `/user/${userId}`;
  },
  ADDPROJECT(userId) {
    return `/user/${userId}/project/`;
  },
  GETPROJECTS(userId) {
    return `/user/${userId}/project/`;
  },
  ADDSTAFF(userId) {
    return `/user/${userId}/staff`;
  },
  GETSTAFFS(userId) {
    return `/user/${userId}/staff`;
  },
  GETSTAFFLIST(userId) {
    return `/user/${userId}/staffList`;
  },
  PAYSTAFF(userId) {
    return `/user/${userId}/payStaff`;
  },
};
