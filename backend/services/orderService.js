import Service from "./service";

class OrderService extends Service {
  constructor(model) {
    super(model);
  }

  async updateOrder(staffResponse, orderId) {
    try {
      let updatedOrder = await this.model.findOneAndUpdate(
        { _id: orderId },
        {
          $set: { amtToBePaid: staffResponse.amtToBePaid },
          $push: { staffs: { $each: staffResponse.staffIds } },
        },
        { new: true }
      );

      if (updatedOrder)
        return {
          error: false,
          updatedOrder,
        };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        message: error.errmsg || "Not able to update order",
        errors: error.errors,
      };
    }
  }

  async insert(data) {
    try {
      // fiver amount(FA) - 20%(FA)
      data.totalAmount = data.totalAmount - 0.2 * data.totalAmount;

      // amtToBePaid = total amt alloted to staff
      data.amtToBePaid = 0;
      data.staffDetails.forEach((staff) => {
        data.amtToBePaid = data.amtToBePaid + staff.amtToBePaid;
      });

      // delete staff details from body
      let orderData = {...data}
      delete orderData.staffDetails;

      let item = await this.model.create(orderData);
      if (item)
        return {
          error: false,
          item,
        };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        message: error.errmsg || "Not able to create item",
        errors: error.errors,
      };
    }
  }
}

export default OrderService;
