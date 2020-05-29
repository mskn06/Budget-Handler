import Service from "./service";

class UserService extends Service {
  constructor(model) {
    super(model);

    // IF DELIVERY DATE >= TODAY DATE
    // update amtInClearance

    // if delivery date + clearance time  >= today's date
    // update amtCleared = orderAmount(from body)
  }

  async updateFiguresService(body) {
    try {
      var amtToBePaid = 0;
      body.staffDetails.forEach((element) => {
        amtToBePaid = amtToBePaid + element.toPay;
      });

      // have to update session email
      let item = await this.model.findOneAndUpdate(
        { email: "muskaan@gmail.com" },
        { $set: { amtToBePaid: amtToBePaid } },
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
