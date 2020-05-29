import Controller from "./controller";
import StaffService from "../services/staffService";
import Staff from "./../models/staff";

const staffService = new StaffService(new Staff().getInstance());

class StaffController extends Controller {
  constructor(service) {
    super(service);
  }

  async addStaff(element) {
    let response = await this.service.updateData(element);
    // console.log("response", response)
    return response
  }
}

export default new StaffController(staffService);
