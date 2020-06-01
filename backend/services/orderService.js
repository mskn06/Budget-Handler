import Service from "./service";

class OrderService extends Service {
  constructor(model) {
    super(model);
    this.getStaffDetails = this.getStaffDetails.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
    this.insert = this.insert.bind(this);

  }

  async getAll(query) {
    let { skip, limit } = query;

    skip = skip ? Number(skip) : 0;
    limit = limit ? Number(limit) : 10;

    delete query.skip;
    delete query.limit;

    if (query._id) {
      try {
        query._id = new mongoose.mongo.ObjectId(query._id);
      } catch (error) {
        console.log("not able to generate mongoose id with content", query._id);
      }
    }

    try {
      let items = await this.model.find(query).populate("staffs").skip(skip).limit(limit);
      let total = await this.model.countDocuments();

      return {
        error: false,
        statusCode: 200,
        data: items,
        total,
      };
    } catch (errors) {
      return {
        error: true,
        statusCode: 500,
        errors,
      };
    }
  }

  async getStaffDetails(req) {
    try {
      let response = await this.model.findById(req.params.id).populate("staffs");
      // console.log(response);
      return response;
    } catch (error) {
      return error;
    }
  }

  async updateOrder(staffResponse, orderId) {
    try {
      console.log(staffResponse);
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
      let orderData = { ...data };
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
