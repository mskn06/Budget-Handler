import Controller from "./controller";
import UserService from "../services/userService";
import User from "../models/user";

const userService = new UserService(new User().getInstance());

class UserController extends Controller {
  constructor(service) {
    super(service);
  }

  async updateFigures(body) {
    let response = await this.service.updateFiguresService(body);
    return response;
  }
}

export default new UserController(userService);
