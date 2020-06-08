import Controller from "./controller";
import ProjectService from "../services/projectService";
import Project from "../models/project";
import StaffController from "./staffController";
import UserController from "./userController";

const projectService = new ProjectService(new Project().getInstance());

class ProjectController extends Controller {
  constructor(service) {
    super(service);
    this.getStaff = this.getStaff.bind(this);
    this.insert = this.insert.bind(this);
    this.updatePaymentDate = this.updatePaymentDate.bind(this);
  }

  async insert(req, res) {
    try {
      // call PROJECT insert service
      let projectResponse = await this.service.addProject(req.body);
      console.log("projectResponse", projectResponse);

      // return response if error found
      if (projectResponse.error)
        return res
          .status(projectResponse.statusCode)
          .send(projectResponse.message);

      // call STAFF update service
      if (req.body.staff) {
        let staffResponse = await StaffController.addProject(req.body);
        console.log("staffResponse", staffResponse);

        // return response if error found
        if (!staffResponse.success)
          return res
            .status(staffResponse.statusCode)
            .send(staffResponse.message);
      }

      // call USER update service
      let userResponse = await UserController.addProject(req, projectResponse);
      console.log("userResponse", userResponse);

      // return response if error found
      if (userResponse.error)
        return res.status(userResponse.statusCode).send(userResponse.message);
      else return res.status(projectResponse.statusCode).send(projectResponse);
    } catch (error) {
      res.send(error);
    }
  }

  // async getAll(req, res) {
  //   return res.status(200).send(await this.service.getAll(req.query));
  // }

  async getStaff(req, res) {
    try {
      let response = await this.service.getStaffDetails(req);
      res.send(response);
    } catch (error) {
      // console.log(error);
      res.send(error);
    }
  }

  async updatePaymentDate(req, res) {
    try {
      var d = new Date();
      res.status(200).send({ data: d });
    } catch (error) {
      // console.log(error);
      res.send(error);
    }
  }
}

export default new ProjectController(projectService);
