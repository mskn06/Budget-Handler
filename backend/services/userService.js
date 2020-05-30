import Service from "./service";

class UserService extends Service {
  constructor(model) {
    super(model);

    // IF DELIVERY DATE >= TODAY DATE
    // update amtInClearance

    // if delivery date + clearance time  >= today's date
    // update amtCleared = orderAmount(from body)
  }

  async addStaffName(staffName) {
    try {
      let item = await this.model.findOneAndUpdate(
        { email: "muskaan@gmail.com" },
        { $push: { staff: staffName } },
        { new: true }
      );
      return {
        error: false,
        statusCode: 202,
        item,
      };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        error,
      };
    }
  }

  async updateFiguresService(amtToBePaid, orderId) {
    try {
      // have to update session email
      let item = await this.model.findOneAndUpdate(
        { email: "muskaan@gmail.com" },
        { $inc: { amtToBePaid: amtToBePaid }, $push: { orders: orderId } },
        { new: true }
      );
      return {
        error: false,
        statusCode: 202,
        item,
      };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        error,
      };
    }
  }
}

export default UserService;
