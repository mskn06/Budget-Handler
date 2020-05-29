import StaffController from "../controller/staffController";

export default (server) =>{

    server.get("/staff", StaffController.getAll);
    server.post("/staff", StaffController.insert);
    server.put("/staff/:id", StaffController.update);
    server.delete("/staff/:id", StaffController.delete);
}