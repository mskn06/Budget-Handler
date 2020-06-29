const { Router } = require("express");
const ProjectController = require("../controller/projectController");
const UserController = require("../controller/userController");

const router = Router();
router.post("/user/:userId/project", ProjectController.insert);
router.get("/user/:userId/project", UserController.getProjects);
router.post("/user/:userId/payStaff", ProjectController.payStaff);

// router.get("/project/date", ProjectController.updatePaymentDate);
// router.get("/project/:id", ProjectController.getStaff);
// router.put("/project/:id", ProjectController.update);
// router.delete("/project/:id", ProjectController.delete);

module.exports = (app) => {
  app.use(`/`, router);
};
