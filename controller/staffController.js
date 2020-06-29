const Controller = require("./controller");
const service = require("../services/staffService");
const UserController = require("./userController");

class StaffController extends Controller {
  constructor() {
    super(service);
    this.getProject = this.getProject.bind(this);
    this.insert = this.insert.bind(this);
    this.updateStaff = this.updateStaff.bind(this);
    this.getStaffIds = this.getStaffIds.bind(this);
  }

  async addProject(body) {
    let response = await this.service.addProject(body);
    return response;
  }

  async getProject(req, res) {
    try {
      // console.log(req.params);
      // console.log(this);
      let response = await this.service.getProjectDetails(req);
      res.send(response);
    } catch (error) {
      // console.log(error);
      res.send(error);
    }
  }

  // IMPORTANT
  async insert(req, res) {
    // add staffName to staff model
    let response = await this.service.insert(req.body);
    if (response.error) return res.status(response.statusCode).send(response);

    // add staffName to user model
    let userResponse = UserController.addStaff(
      req.params.userId,
      response.item
    );
    if (userResponse.error)
      return res.status(userResponse.statusCode).send(userResponse);

    return res.status(201).send(response);
  }

  async updateStaff(body, projectId) {
    let updatedStaff = await this.service.updateData(body, projectId);

    if (!updatedStaff.success)
      return res.status(updatedStaff.statusCode).send(updatedStaff);

    return updatedStaff.amtToBePaid;
  }

  async getStaffIds(projectId) {
    let staffIds = await this.service.getIds(projectId);
    return staffIds;
  }

  async payStaff(date, body) {
    let response = await this.service.payStaff(date, body);
    return response;
  }
}

module.exports = new StaffController();
