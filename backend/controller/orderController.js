import Controller from "./controller";
import OrderService from "../services/orderService";
import Order from "./../models/order";
import StaffController from "./staffController";

const orderService = new OrderService(new Order().getInstance());

class OrderController extends Controller {
  constructor(service) {
    super(service);
  }

  async insert(req, res) {
    try {
      let response = await this.service.insert(req.body);
      response.item.staffDetails.forEach(async (element) => {
        let staff = await StaffController.addStaff(element);
        if (staff.error) return res.status(staff.statusCode).send(staff);
      });
      if (response.error) return res.status(response.statusCode).send(response);
      else return res.status(201).send(response);
    } catch (error) {
      res.send(error);
    }
  }
}

export default new OrderController(orderService);
