const ProjectController = require("../controller/projectController");
const UserController = require("../controller/userController");

module.exports = (server) => {
  // add project
  server.post("/user/:userId/project", ProjectController.insert);
  server.get("/user/:userId/project", UserController.getProjects);
  server.post("/user/:userId/payStaff", ProjectController.payStaff);

  // server.get("/project/date", ProjectController.updatePaymentDate);
  // server.get("/project/:id", ProjectController.getStaff);
  // server.put("/project/:id", ProjectController.update);
  // server.delete("/project/:id", ProjectController.delete);
};
