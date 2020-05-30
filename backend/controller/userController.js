import Controller from "./controller";
import UserService from "../services/userService";
import User from "../models/user";

const userService = new UserService(new User().getInstance());

class UserController extends Controller {
  constructor(service) {
    super(service);
  }

  async addStaff(staffName) {
    let response = await this.service.addStaffName(staffName);
    return response;
  }

  async updateFigures(amtToBePaid, orderId) {
    let response = await this.service.updateFiguresService(
      amtToBePaid,
      orderId
    );
    return response;
  }
}

export default new UserController(userService);
