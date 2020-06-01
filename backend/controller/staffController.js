import Controller from "./controller";
import StaffService from "../services/staffService";
import Staff from "./../models/staff";

import UserController from "./userController";

const staffService = new StaffService(new Staff().getInstance());

class StaffController extends Controller {
  constructor(service) {
    super(service);
    this.getOrder = this.getOrder.bind(this)
    this.insert = this.insert.bind(this)
    this.updateStaff = this.updateStaff.bind(this)
    this.getStaffIds = this.getStaffIds.bind(this)
  }

  async getOrder(req, res) {
    try {
      console.log(req.params);
      // console.log(this);
      let response = await this.service.getOrderDetails(req);
      res.send(response);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }

  async insert(req, res) {
    // add staffName to staff model
    let response = await this.service.insert(req.body);
    if (response.error) return res.status(response.statusCode).send(response);

    // add staffName to user model
    let userResponse = UserController.addStaff(response.item.staffName);
    if (userResponse.error)
      return res.status(userResponse.statusCode).send(userResponse);

    return res.status(201).send(response);
  }

  async updateStaff(body, orderId) {
    let updatedStaff = await this.service.updateData(body, orderId);

    if (!updatedStaff.success)
      return res.status(updatedStaff.statusCode).send(updatedStaff);

    return updatedStaff.amtToBePaid ;
  }

  async getStaffIds(orderId) {
    let staffIds = await this.service.getIds(orderId);
    return staffIds;
  }
}

export default new StaffController(staffService);
