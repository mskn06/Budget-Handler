import Controller from "./controller";
import UserService from "../services/userService";
import User from "../models/user";

const userService = new UserService(new User().getInstance());

class UserController extends Controller {
  constructor(service) {
    super(service);
    this.getUser = this.getUser.bind(this);
    this.getStaff = this.getStaff.bind(this);
    this.getProjects = this.getProjects.bind(this);
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

  // IMPORTANT
  async addProject(req, project) {
    let response = await this.service.addProject(req, project);
    return response;
  }

  // IMPORTANT
  async addStaff(userId, staff) {
    let response = await this.service.addStaff(userId, staff);
    return response;
  }

  // IMPORTANT
  async getStaff(req, res) {
    // console.log("response", req.params);
    let response = await this.service.getStaff(req.params.userId);
    // console.log("response", response);
    return res.status(response.statusCode).send(response.data.staffs);
  }

  // IMPORTANT
  async getProjects(req, res) {
    // console.log("response", req.params);
    let response = await this.service.getProjects(req.params.userId);
    // console.log("response", response);
    return res.status(response.statusCode).send(response.data.projects);
  }
}

export default new UserController(userService);
