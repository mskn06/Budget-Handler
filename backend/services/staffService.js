import Service from "./service";

class StaffService extends Service {
  constructor(model) {
    super(model);

    this.getOrderDetails = this.getOrderDetails.bind(this)
    this.getIds = this.getIds.bind(this)
    this.updateData = this.updateData.bind(this)
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
      let items = await this.model.find(query).populate("orders").skip(skip).limit(limit);
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

  async getOrderDetails(req) {
    try {
      let response = await this.model.findById(req.params.id).populate("orders");
      // console.log(response);
      return response;
    } catch (error) {
      return error;
    }
  }

  async getIds(orderId) {
    let staffIds = [];

    let item = await this.model.find({ orders: orderId });

    item.forEach((staff) => {
      staffIds.push(staff._id);
    });
    return staffIds;
  }

  async updateData(body, orderId) {
    let staffUpdates = [];
    let amtToBePaid = 0;

    body.staffDetails.forEach((staff) => {
      amtToBePaid += staff.amtToBePaid;

      staffUpdates.push({
        updateOne: {
          filter: { staffName: staff.staffName },
          update: {
            $inc: { projects: 1 , amtToBePaid: staff.amtToBePaid},
            $push: { orders: orderId },
          },
          new: true,
        },
      });
    });
    try {
      let item = await this.model.bulkWrite(staffUpdates);

      return {
        error: false,
        statusCode: 202,
        success: item.result.nModified,
        amtToBePaid,
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
