import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

class Staff {
  initSchema() {
    const schema = new Schema(
      {
        profile: {
          staffName: {
            type: String,
            required: true,
          },
          projectCount: {
            type: Number,
            default: 0,
          },
        },
        payment: {
          amtToBePaid: {
            type: Number,
            default: 0,
          },
          amtPaid: {
            type: Number,
            default: 0,
          },
          projectPercentage: {
            type: Number,
            default: 0,
          },
        },

        projects: [
          {
            profile: {
              projectName: String,
            },
            payment: {
              amtToBePaid: Number,
              amtPaid: Number,
              projectPercentage: Number,
              paidOn: Date,
            },
          },
        ],
      },
      { timestamps: true }
    );

    // increment project number every time

    schema.plugin(uniqueValidator);
    mongoose.model("Staff", schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("Staff");
  }
}

export default Staff;
