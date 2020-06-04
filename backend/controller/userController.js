import Controller from "./controller";
import UserService from "../services/userService";
import User from "../models/user";

const userService = new UserService(new User().getInstance());

class UserController extends Controller {
  constructor(service) {
    super(service);
  }

  async addProject(body, project) {
    let response = await this.service.addProject(body, project);
    return response;
  }

  async addStaff(staff) {
    let response = await this.service.addStaff(staff);
    return response;
  }

  async updateFigures(amtToBePaid, projectId) {
    let response = await this.service.updateFiguresService(
      amtToBePaid,
      projectId
    );
    return response;
  }
}

export default new UserController(userService);
