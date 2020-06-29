const { Router } = require("express");
const UserController = require("../controller/userController");
const router = Router();

// signup
router.post("/signup", UserController.insert);

// login
router.post("/login", UserController.getOne);

// update
router.get("/user/:id", UserController.getUser);
router.post("/user/:id", UserController.update);
router.get("/user/:userId/staffList", UserController.getStaffNames);

module.exports = (app) => {
  app.use(`/`, router);
};
