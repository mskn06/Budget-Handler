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
      // adding order details in Order model
      let response = await this.service.insert(req.body);
      // console.log("response", response);

      // update staff details in Staff model, returns staffId, amtToBePaid
      let staffResponse = await StaffController.getStaffIds(
        req.body,
        response.item._id
      );
      console.log("staffResponse", staffResponse);

      // populate staffIds and amtToBePaid
      let orderResponse = await this.service.updateOrder(
        staffResponse,
        response.item._id
      );
      // console.log("orderResponse", orderResponse);

      // update user figures in User model
      let userResponse = await UserController.updateFigures(
        staffResponse.amtToBePaid,
        response.item._id
      );
      // console.log("userResponse", userResponse);

      // return response
      if (orderResponse.error) return res.status(orderResponse.statusCode).send(orderResponse);
      else return res.status(201).send(orderResponse);
    } catch (error) {
      res.send(error);
    }
  }

  async updatePaymentDate(req, res) {
    try {
      var d = new Date();
      res.status(200).send({ data: d });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
}

export default new OrderController(orderService);
