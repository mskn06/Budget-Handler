const Service = require("./service");
const model = require("../models/project");

class ProjectService extends Service {
  constructor() {
    super(model);
    this.getStaffDetails = this.getStaffDetails.bind(this);
    this.updateProject = this.updateProject.bind(this);
    this.insert = this.insert.bind(this);
    this.payStaff = this.payStaff.bind(this);
  }

  // IMPORTANT
  async addProject(body) {
    // create an obj to store
    let item = {
      profile: {
        projectName: body.projectName,
        delivery: body.delivery,
      },
      payment: {
        totalAmount: body.totalAmount,
        amtToBePaid: 0,
      },
      staffs: [],
    };

    // add staff details
    if (body.staff && body.staff.staffName != "") {
      body.staff.forEach((element) => {
        // add staff
        item.staffs.push({
          profile: {
            staffName: element.staffName,
          },
          payment: {
            amtToBePaid: element.amtToBePaid,
          },
        });

        // add amtToBePaid
        item.payment.amtToBePaid += element.amtToBePaid;
      });
    } else delete item.staffs;

    // item to be stored
    // console.log("project item", item.staffs);

    try {
      // store the obj to Project
      let response = await this.model.create(item);

      if (response)
        return {
          error: false,
          statusCode: 201,
          response,
        };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        message: error.errmsg || "Not able to create project",
      };
    }
  }

  async payStaff(date, body) {
    try {
      let project = body.project;
      let staff = body.staff;
      // paid to staff
      let amountPaid = staff.payment.amtToBePaid;
      let projectId = project._id;
      let newResponse;

      let response = await this.model.updateOne(
        { _id: projectId, "staffs._id": staff._id },
        {
          $inc: {
            "payment.amtToBePaid": -amountPaid,
            "payment.amtPaid": amountPaid,
          },
          $set: {
            "staffs.$.payment.amtToBePaid": 0,
            "staffs.$.payment.amtPaid": amountPaid,
            "staffs.$.payment.paidOn": date,
          },
        },
        { new: true, upsert: true }
      );

      let updatedResponse = await this.model
        .findById(projectId)
        .populate("staffs");
      console.log("res", updatedResponse);

      if (updatedResponse.staffs.length == 1) {
        newResponse = await this.model.findOneAndUpdate(
          { _id: projectId },
          {
            $set: { "profile.status": "COMPLETE" },
          }
        );
      } else {
        let flag = 0;
        updatedResponse.staffs.forEach((element) => {
          if (element.payment.amtToBePaid != 0) {
            flag = 1;
          }
        });

        if (flag == 0) {
          await this.model.findOneAndUpdate(
            { _id: projectId },
            {
              $set: { "profile.status": "COMPLETE" },
            }
          );

          newResponse = await this.model.findById(projectId);
          console.log("newResponse", newResponse);
        }
      }
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
        message: error.errmsg || "Not able to update staff Payment",
        errors: error.errors,
      };
    }
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
      let items = await this.model
        .find(query)
        .populate("staffs")
        .skip(skip)
        .limit(limit);
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
      let response = await this.model
        .findById(req.params.id)
        .populate("staffs");
      // console.log(response);
      return response;
    } catch (error) {
      return error;
    }
  }

  async updateProject(staffResponse, projectId) {
    try {
      // console.log(staffResponse);
      let updatedProject = await this.model.findOneAndUpdate(
        { _id: projectId },
        {
          $set: { amtToBePaid: staffResponse.amtToBePaid },
          $push: { staffs: { $each: staffResponse.staffIds } },
        },
        { new: true }
      );

      if (updatedProject)
        return {
          error: false,
          updatedProject,
        };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        message: error.errmsg || "Not able to update project",
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
      let projectData = { ...data };
      delete projectData.staffDetails;

      let item = await this.model.create(projectData);
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

module.exports = new ProjectService();
