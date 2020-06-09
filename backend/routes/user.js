import UserController from "../controller/userController";

export default (server) => {
  // signup
  server.post("/signup", UserController.insert);

  // login
  server.post("/login", UserController.getOne);

  // update
  server.get("/user/:id", UserController.getUser);
  server.post("/user/:id", UserController.update);
  server.get("/user/:userId/staffList", UserController.getStaffNames);
};
