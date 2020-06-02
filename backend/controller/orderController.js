import Controller from "./controller";
import ProjectService from "../services/projectService";
import Project from "./../models/project";
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

  async getStaff(req, res) {
    try {
      let response = await this.service.getStaffDetails(req);
      res.send(response);
    } catch (error) {
      // console.log(error);
      res.send(error);
    }
  }

  async insert(req, res) {
    try {
      // adding project details in Project model
      let response = await this.service.insert(req.body);

      // update staff details in Staff model & returns amtToBePaid
      let amtToBePaid = await StaffController.updateStaff(
        req.body,
        response.item._id
      );

      // returns staffIds
      let staffIds = await StaffController.getStaffIds(response.item._id);

      // populate staffIds and amtToBePaid
      let staff = { amtToBePaid, staffIds };
      let projectResponse = await this.service.updateProject(
        staff,
        response.item._id
      );
      // console.log("projectResponse", projectResponse);

      // update user figures in User model
      let userResponse = await UserController.updateFigures(
        staff.amtToBePaid,
        response.item._id
      );
      // console.log("userResponse", userResponse);

      // return response
      if (projectResponse.error)
        return res.status(projectResponse.statusCode).send(projectResponse);
      else return res.status(201).send(projectResponse);
    } catch (error) {
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
