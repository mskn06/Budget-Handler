import Service from "./service";

class StaffService extends Service {
  constructor(model) {
    super(model);

    this.getProjectDetails = this.getProjectDetails.bind(this);
    this.getIds = this.getIds.bind(this);
    this.addProject = this.addProject.bind(this);
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
        .populate("projects")
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

  async addProject(body) {
    let staffInfo = [];

    // creating array of staff objects
    body.staff.forEach((staff) => {
      let projectPercentage = (staff.amtToBePaid / body.totalAmount) * 100;

      staffInfo.push({
        updateOne: {
          filter: { profile: { staffName: staff.staffName } },
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
      console.log("here");
      let response = await this.model.bulkWrite(staffInfo);
      console.log(response);

      return {
        error: false,
        statusCode: 202,
        success: response.result.nModified,
        response,
      };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        message: error || "not able to update staff",
      };
    }
  }
}

export default StaffService;
