import Controller from "./controller";
import StaffService from "../services/staffService";
import Staff from "./../models/staff";

import UserController from "./userController";

const staffService = new StaffService(new Staff().getInstance());

class StaffController extends Controller {
  constructor(service) {
    super(service);
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

  async getStaffIds(body, orderId) {
    let amtToBePaid = 0;
    let staffIds = [];

    body.staffDetails
      .forEach(async (staff) => {
        let updatedStaff = await this.service.updateData(staff, orderId);

        if (updatedStaff.error)
          return res.status(updatedStaff.statusCode).send(updatedStaff);

        amtToBePaid = amtToBePaid + updatedStaff.item.amtToBePaid;
        staffIds.push(updatedStaff._id);
      })
      .then((cb) => {
        return { staffIds: staffIds, amtToBePaid: amtToBePaid };
      });
  }
}

export default new StaffController(staffService);
