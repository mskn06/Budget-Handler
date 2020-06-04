import Service from "./service";

class UserService extends Service {
  constructor(model) {
    super(model);

    // IF DELIVERY DATE >= TODAY DATE
    // update amtInClearance

    // if delivery date + clearance time  >= today's date
    // update amtCleared = projectAmount(from body)
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

  async addProject(body, project) {
    try {
      let amtToBePaid = 0;

      body.staff.forEach((staff) => {
        amtToBePaid += staff.amtToBePaid;
      });

      // have to update session email
      let response = await this.model.findOneAndUpdate(
        { profile: { email: "muskaan@gmail.com" } },
        {
          $inc: {
            "payment.projectCount": 1,
            "payment.amtToBePaid": amtToBePaid,
          },
          $push: { projects: project.response._id },
        },
        { new: true }
      );
      return {
        error: false,
        statusCode: 202,
        response,
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
