const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

class Project {
  static initSchema() {
    const schema = new Schema(
      {
        profile: {
          projectName: {
            type: String,
            required: true,
          },
          delivery: {
            type: Date,
            required: true,
          },
          status: {
            type: String,
            enum: ["PENDING", "COMPLETE"],
            default: "PENDING",
          },
          clearanceTime: {
            type: Number,
            default: 21,
          },
        },
        payment: {
          totalAmount: {
            type: Number,
            required: true,
          },
          amtToBePaid: {
            type: Number,
            default: 0,
          },
          amtPaid: {
            type: Number,
            default: 0,
          },
          amtCleared: {
            type: Number,
            default: 0,
          },
          amtInClearance: {
            type: Number,
            default: 0,
          },
          amtEarned: {
            type: Number,
            default: 0,
          },
        },
        staffs: [
          {
            profile: {
              staffName: String,
            },
            payment: {
              amtToBePaid: Number,
              amtPaid: Number,
              paidOn: Date,
            },
          },
        ],
      },
      { timestamps: true }
    );

    schema.plugin(uniqueValidator);
    mongoose.model("Project", schema);
  }

  static getInstance() {
    this.initSchema();
    return mongoose.model("Project");
  }
}

module.exports = Project.getInstance();
