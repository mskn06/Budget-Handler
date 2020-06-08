import Controller from "./controller";
import UserService from "../services/userService";
import User from "../models/user";

const userService = new UserService(new User().getInstance());

class UserController extends Controller {
  constructor(service) {
    super(service);
    this.getUser = this.getUser.bind(this);
  }

  // IMPORTANT
  async insert(req, res) {
    console.log("req", req.body);
    let response = await this.service.insert(req.body);
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(201).send(response);
  }

  // IMPORTANT
  async getUser(req, res) {
    try {
      return res.status(200).send(await this.service.getUser(req));
    } catch (error) {
      console.log(error);
    }
  }

  // IMPORTANT
  async getOne(req, res) {
    return res.status(200).send(await this.service.getOne(req.body));
  }

  // IMPORTANT
  async update(req, res) {
    const { id } = req.params;

    let response = await this.service.update(id, req.body);

    return res.status(response.statusCode).send(response);
  }

  async addProject(body, project) {
    let response = await this.service.addProject(body, project);
    return response;
  }

  async addStaff(staff) {
    let response = await this.service.addStaff(staff);
    return response;
  }
}

export default new UserController(userService);
