const StaffController = require("../controller/staffController");
const UserController = require("../controller/userController");

module.exports = (server) => {
  // ADD STAFF
  server.post("/user/:userId/staff", StaffController.insert);

  // GET STAFF
  server.get("/user/:userId/staff", UserController.getStaff);

  // GET STAFF NAMES LIST
  // server.get("/staff", StaffController.getNames);

  // server.get("/staff/:id", StaffController.getProject);

  // server.put("/staff/:id", StaffController.update);
  // server.delete("/staff/:id", StaffController.delete);
};
