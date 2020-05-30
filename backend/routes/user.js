import UserController from "../controller/userController";

export default (server) =>{

    // signup
    server.post("/signup", UserController.insert);
    
    // login
    server.get("/login", UserController.getOne);
    
    // update details
    server.put("/user/:id", UserController.update);

    // server.get("/users", UserController.getAll);
    // server.delete("/user/:id", UserController.delete);
}