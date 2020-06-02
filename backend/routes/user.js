import UserController from "../controller/userController";

export default (server) => {
  // signup
  server.post("/signup", UserController.insert);

  // login
  server.get("/login", UserController.getOne);

  // update
  server.put("/user/:id", UserController.update);
};
