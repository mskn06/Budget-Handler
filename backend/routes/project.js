import ProjectController from "../controller/projectController";
import UserController from "../controller/userController";

export default (server) => {
  // add project
  server.post("/user/:userId/project", ProjectController.insert);
  server.get("/user/:userId/project", UserController.getProjects);

  // server.get("/project/date", ProjectController.updatePaymentDate);
  // server.get("/project/:id", ProjectController.getStaff);
  // server.put("/project/:id", ProjectController.update);
  // server.delete("/project/:id", ProjectController.delete);
};
