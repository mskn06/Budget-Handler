import Service from "./service";

class StaffService extends Service {
  constructor(model) {
    super(model);
  }

  async updateData(staff, orderId) {
    try {
      let item = await this.model.findOneAndUpdate(
        { staffName: staff.staffName },
        {
          $set: { amtToBePaid: staff.amtToBePaid },
          $inc: { projects: 1 },
          $push: { orders: orderId },
        },
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

export default StaffService;
