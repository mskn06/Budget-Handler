import Service from "./service";

class StaffService extends Service {
  constructor(model) {
    super(model);
  }

  async updateData(element) {
    try {
      let item = await this.model.findOneAndUpdate(
        { staffName: element.staffName },
        { $set: { toPay: element.toPay }, $inc: { projects: 1 } },
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
