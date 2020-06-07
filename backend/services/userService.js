import Service from "./service";

class UserService extends Service {
  constructor(model) {
    super(model);
    this.getUser = this.getUser.bind(this);

    // IF DELIVERY DATE >= TODAY DATE
    // update amtInClearance

    // if delivery date + clearance time  >= today's date
    // update amtCleared = projectAmount(from body)
  }

  async insert(body) {
    try {
      let data = {
        profile: body,
      };
      let existingItem = await this.model.find({ "profile.email": body.email });
      // console.log(existingItem.length);
      if (existingItem.length)
        return {
          error: true,
          statusCode: 409,
          item: existingItem,
        };

      let item = await this.model.create(data);
      if (item)
        return {
          error: false,
          item,
        };
    } catch (error) {
      // console.log("error", error);
      return {
        error: true,
        statusCode: 500,
        message: error.errmsg || "Not able to create item",
        errors: error.errors,
      };
    }
  }

  async addStaff(staff) {
    try {
      let item = await this.model.findOneAndUpdate(
        { "profile.email": "muskaan@gmail.com" },
        { $push: { staffs: staff._id } },
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
        { "profile.email": "muskaan@gmail.com" },
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

  async getUser(req) {
    try {
      let item = await this.model.findById(req.params.id);
      return {
        error: false,
        statusCode: 200,
        data: item,
      };
    } catch (errors) {
      return {
        error: true,
        statusCode: 500,
        errors,
      };
    }
  }
  async getOne(body) {
    try {
      let item = await this.model.findOne({ "profile.email": body.email });

      return {
        error: false,
        statusCode: 200,
        data: item,
      };
    } catch (errors) {
      return {
        error: true,
        statusCode: 500,
        errors,
      };
    }
  }

  async update(id, data) {
    try {
      let item = {
        profile: data,
      };
      let response = await this.model.findByIdAndUpdate(id, item, {
        new: true,
      });
      return {
        error: false,
        statusCode: 202,
        item: response,
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
