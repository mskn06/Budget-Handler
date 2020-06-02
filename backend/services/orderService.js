import Service from "./service";

class ProjectService extends Service {
  constructor(model) {
    super(model);
    this.getStaffDetails = this.getStaffDetails.bind(this);
    this.updateProject = this.updateProject.bind(this);
    this.insert = this.insert.bind(this);
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

export default ProjectService;
