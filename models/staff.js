const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

class Staff {
  static initSchema() {
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

  static getInstance() {
    this.initSchema();
    return mongoose.model("Staff");
  }
}

module.exports = Staff.getInstance();
