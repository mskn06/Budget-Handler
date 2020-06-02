import StaffController from "../controller/staffController";

export default (server) => {
  // GET (reqd: list of staff names)
  server.get("/staff", StaffController.getAll);

  // ADD STAFF
  server.post("/staff", StaffController.insert);

  server.get("/staff/:id", StaffController.getProject);

  // server.put("/staff/:id", StaffController.update);
  // server.delete("/staff/:id", StaffController.delete);
};
