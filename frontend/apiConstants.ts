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
  ADDSTAFF(userId) {
    return `${api}/user/${userId}/staff`;
  },
  GETSTAFFS(userId) {
    return `${api}/user/${userId}/staff`;
  },
  ADDPROJECT(userId) {
    return `${api}/user/${userId}/project/`;
  },
  GETPROJECTS(userId) {
    return `${api}/user/${userId}/project/`;
  },
};
