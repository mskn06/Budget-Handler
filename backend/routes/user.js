import UserController from "../controller/user";

export default (server) =>{

    server.get("/user", UserController.getAll);
    server.post("/user", UserController.insert);
    server.put("/user/:id", UserController.update);
    server.delete("/user/:id", UserController.delete);
}