import StaffController from "../controller/staffController";

export default (server) => {
  // ADD STAFF
  server.post("/staff", StaffController.insert);

  // GET STAFF
  server.get("/staff", StaffController.getAll);

  // GET STAFF NAMES LIST
  // server.get("/staff", StaffController.getNames);

  // server.get("/staff/:id", StaffController.getProject);

  // server.put("/staff/:id", StaffController.update);
  // server.delete("/staff/:id", StaffController.delete);
};
