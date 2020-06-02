import ProjectController from "../controller/projectController";

export default (server) => {
  // add project
  server.post("/project", ProjectController.insert);
  server.get("/project", ProjectController.getAll);
  server.get("/project/date", ProjectController.updatePaymentDate);

  server.get("/project/:id", ProjectController.getStaff);
  server.put("/project/:id", ProjectController.update);
  server.delete("/project/:id", ProjectController.delete);
};
