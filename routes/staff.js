const { Router } = require("express");
const StaffController = require("../controller/staffController");
const UserController = require("../controller/userController");
const router = Router();

// ADD STAFF
router.post("/user/:userId/staff", StaffController.insert);

// GET STAFF
router.get("/user/:userId/staff", UserController.getStaff);

// GET STAFF NAMES LIST
// router.get("/staff", StaffController.getNames);

// router.get("/staff/:id", StaffController.getProject);

// router.put("/staff/:id", StaffController.update);
// router.delete("/staff/:id", StaffController.delete);
module.exports = (app) => {
  app.use(`/`, router);
};
