import Controller from  './controller';
import UserService from  "./../services/UserService";
import User from  "./../models/user";

const userService = new UserService(
  new User().getInstance()
);

class UserController extends Controller {

  constructor(service) {
    super(service);
  }
}

export default new UserController(userService);