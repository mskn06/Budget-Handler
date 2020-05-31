import Service from "./service";

class StaffService extends Service {
  constructor(model) {
    super(model);
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
            $set: { amtToBePaid: staff.amtToBePaid },
            $inc: { projects: 1 },
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
