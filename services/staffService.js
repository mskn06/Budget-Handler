const Service = require("./service");
const model = require("../models/staff");

class StaffService extends Service {
  constructor() {
    super(model);

    this.getProjectDetails = this.getProjectDetails.bind(this);
    this.getIds = this.getIds.bind(this);
    this.addProject = this.addProject.bind(this);
  }

  async insert(body) {
    try {
      let data = {
        profile: body,
      };
      // let existingItem = await this.model.find({
      //   "profile.staffName": body.staffName,
      // });
      // // console.log(existingItem.length)
      // if (existingItem.length)
      //   return {
      //     error: true,
      //     statusCode: 409,
      //     item: existingItem,
      //   };

      let item = await this.model.create(data);
      if (item)
        return {
          error: false,
          item,
        };
    } catch (error) {
      console.log("error", error);
      return {
        error: true,
        statusCode: 500,
        message: error.errmsg || "Not able to create item",
        errors: error.errors,
      };
    }
  }

  // IMPORTANT
  // async getAll(query) {
  //   let { skip, limit } = query;

  //   skip = skip ? Number(skip) : 0;
  //   limit = limit ? Number(limit) : 10;

  //   delete query.skip;
  //   delete query.limit;

  //   if (query._id) {
  //     try {
  //       query._id = new mongoose.mongo.ObjectId(query._id);
  //     } catch (error) {
  //       console.log("not able to generate mongoose id with content", query._id);
  //     }
  //   }

  //   try {
  //     let items = await this.model
  //       .find(query)
  //       .populate("projects")
  //       .skip(skip)
  //       .limit(limit);
  //     let total = await this.model.countDocuments();

  //     return {
  //       error: false,
  //       statusCode: 200,
  //       data: items,
  //       total,
  //     };
  //   } catch (errors) {
  //     return {
  //       error: true,
  //       statusCode: 500,
  //       errors,
  //     };
  //   }
  // }

  async getProjectDetails(req) {
    try {
      let response = await this.model
        .findById(req.params.id)
        .populate("projects");
      // console.log(response);
      return response;
    } catch (error) {
      return error;
    }
  }

  async getIds(projectId) {
    let staffIds = [];

    let item = await this.model.find({ projects: projectId });

    item.forEach((staff) => {
      staffIds.push(staff._id);
    });
    return staffIds;
  }

  // IMPORTANT
  async addProject(body) {
    let staffInfo = [];

    // creating array of staff objects
    body.staff.forEach((staff) => {
      let projectPercentage =
        Math.round((staff.amtToBePaid / body.totalAmount) * 10000) / 100;
      // console.log("st", staffInfo);
      staffInfo.push({
        updateOne: {
          filter: { "profile.staffName": staff.staffName },
          update: {
            $inc: {
              "profile.projectCount": 1,
              "payment.amtToBePaid": staff.amtToBePaid,
            },
            $push: {
              projects: {
                profile: { projectName: body.projectName },
                payment: {
                  amtToBePaid: staff.amtToBePaid,
                  projectPercentage: projectPercentage,
                },
              },
            },
          },
          new: true,
        },
      });
    });

    // final staff objects to be updated
    // console.log("staff objects in add order", staffInfo);

    try {
      let response = await this.model.bulkWrite(staffInfo);
      console.log(response);

      return {
        error: false,
        statusCode: 202,
        success: response.modifiedCount,
      };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        message: error || "not able to update staff",
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

  async payStaff(date, body) {
    // STAFF info
    // 1 PAYMENT: paid, tobepaid
    // 2 PROJECTS: PAYEMNT: paid, tobepaid, paidOn

    try {
      let staff = body.staff;
      let project = body.project;
      let staffId = staff._id;
      let projectName = project.profile.projectName;
      let amountPaid = staff.payment.amtToBePaid;

      let staffProject = {
        profile: {
          projectName: project.profile.projectName,
        },
      };

      // console.log(staffProject);
      // console.log("here", staffId);

      let response = await this.model.updateOne(
        { "profile.staffName": staff.profile.staffName },
        {
          $inc: {
            "payment.amtToBePaid": -amountPaid,
            "payment.amtPaid": amountPaid,
            "projects.$[i].payment.amtPaid": amountPaid,
          },
          $set: {
            "projects.$[i].payment.amtToBePaid": 0,
            "projects.$[i].payment.paidOn": date,
          },
        },
        {
          new: true,
          upsert: true,
          arrayFilters: [{ "i.profile.projectName": projectName }],
        }
      );
      // console.log("here");
      let updatedResponse = await this.model
        .find({ "profile.staffName": staff.profile.staffName })
        .populate("projects");
      console.log("staff res", updatedResponse[0].projects);
      if (response)
        return {
          error: false,
          statusCode: 200,
          response: updatedResponse[0],
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
}

module.exports = new StaffService();
