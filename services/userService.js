const Service = require("./service");
const model = require("../models/user");

class UserService extends Service {
  constructor() {
    super(model);
    this.getUser = this.getUser.bind(this);
    this.getStaffNames = this.getStaffNames.bind(this);

    // IF DELIVERY DATE >= TODAY DATE
    // update amtInClearance

    // if delivery date + clearance time  >= today's date
    // update amtCleared = projectAmount(from body)
  }
  // IMPORTANT
  async insert(body) {
    try {
      console.log("body", body);
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
      console.log("item", item);
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

  // IMPORTANT
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
  // IMPORTANT
  async getOne(body) {
    try {
      let item = await this.model.findOne({ "profile.email": body.email });

      return {
        error: false,
        statusCode: 200,
        data: item,
      };
    } catch (errors) {
      console.error("login error", errors);
      return {
        error: true,
        statusCode: 500,
        errors,
      };
    }
  }
  // IMPORTANT
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

  // IMPORTANT
  async addStaff(userId, staff) {
    try {
      let item = await this.model.findByIdAndUpdate(
        userId,
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

  // IMPORTANT
  async addProject(req, project) {
    try {
      let body = req.body;
      let amtToBePaid = 0;
      if (body.staff) {
        body.staff.forEach((staff) => {
          amtToBePaid += staff.amtToBePaid;
        });
      }

      // have to update session email
      let response = await this.model.findByIdAndUpdate(
        req.params.userId,
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

  // IMPORTANT
  async getStaff(userId) {
    try {
      let item = await this.model
        .findById(userId)
        .populate({ path: "staffs", options: { sort: { createdAt: -1 } } });
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

  // IMPORTANT
  async getProjects(userId) {
    try {
      let item = await this.model
        .findById(userId)
        .populate({ path: "projects", options: { sort: { createdAt: -1 } } });
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

  // IMPORTANT
  async getStaffNames(userId) {
    try {
      // console.log(userId);
      let item = await this.model
        .findById(userId)
        .populate({ path: "staffs", options: { sort: { createdAt: -1 } } });

      let data = [];
      item.staffs.forEach((element) => {
        data.unshift(element.profile.staffName);
      });
      // console.log("data", data);
      return {
        error: false,
        statusCode: 200,
        data: data,
      };
    } catch (errors) {
      return {
        error: true,
        statusCode: 500,
        errors,
      };
    }
  }

  async payStaff(date, req) {
    // USER info
    // PAYMENT: paid, tobepaid

    try {
      let userId = req.params.userId;
      let amountPaid = req.body.staff.payment.amtToBePaid;
      let staff = req.body.staff;

      let day = String(date.getDate()).padStart(2, "0");
      let month = String(date.getMonth()).padStart(2, "0");
      let year = date.getFullYear();
      let output = day + "-" + month + "-" + year;
      if (month / 10 == 0) month = "0" + month;

      let activity = `$${amountPaid} paid to ${staff.profile.staffName} on ${output}`;
      // console.log("activity", activity);

      let response = await this.model.updateOne(
        { _id: userId },
        {
          $inc: {
            "payment.amtToBePaid": -amountPaid,
            "payment.amtPaid": amountPaid,
          },
          $push: {
            activity: {
              $each: [activity],
              $position: 0,
            },
          },
        },
        {
          new: true,
          upsert: true,
        }
      );
      let updatedResponse = await this.model.findById(userId);

      console.log("res", updatedResponse);
      if (response)
        return {
          error: false,
          statusCode: 200,
          response: updatedResponse,
        };
    } catch (error) {
      // console.log("err", error);
      return {
        error: true,
        statusCode: 500,
        message: error.errmsg || "Not able to update staff Payment in user",
        errors: error.errors,
      };
    }
  }
}

module.exports = new UserService();
