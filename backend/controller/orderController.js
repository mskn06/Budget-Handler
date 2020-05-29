import Controller from "./controller";
import OrderService from "../services/orderService";
import Order from "./../models/order";
import StaffController from "./staffController";
import UserController from "./userController";

const orderService = new OrderService(new Order().getInstance());

class OrderController extends Controller {
  constructor(service) {
    super(service);
  }

  async insert(req, res) {
    try {
      req.body.orderAmount = req.body.orderAmount - 0.2 * req.body.orderAmount;
      // console.log(req.body.orderAmount)
      let response = await this.service.insert(req.body);

      // update user figures
      let user = await UserController.updateFigures(req.body);
      // console.log("user", user)

      // update staff details
      response.item.staffDetails.forEach(async (element) => {
        let staff = await StaffController.addStaff(element);
        if (staff.error) return res.status(staff.statusCode).send(staff);
      });

      // return response
      if (response.error) return res.status(response.statusCode).send(response);
      else return res.status(201).send(response);
    } catch (error) {
      res.send(error);
    }
  }
}

export default new OrderController(orderService);
