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

      // update user figures in User model
      let user = await UserController.updateFigures(req.body);
      // console.log("user", user)

      // update staff details in Staff model
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

  async updatePaymentDate(req, res){
    try {
      var d = new Date()
    res.status(200).send({data: d})
    } catch (error) {
      console.log(error)
      res.send(error)
    }
    
  }
}

export default new OrderController(orderService);
