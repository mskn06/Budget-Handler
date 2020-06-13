const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

class User {
  static initSchema() {
    const schema = new Schema(
      {
        profile: {
          userName: {
            type: String,
            required: true,
          },
          email: {
            type: String,
            required: true,
          },
          password: {
            type: String,
            required: true,
          },
          clearanceTime: {
            type: Number,
            default: 21,
          },
        },
        payment: {
          projectCount: {
            type: Number,
            default: 0,
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

        projects: [
          {
            type: Schema.Types.ObjectId,
            ref: "Project",
          },
        ],
        staffs: [
          {
            type: Schema.Types.ObjectId,
            ref: "Staff",
          },
        ],
      },
      { timestamps: true }
    );

    schema.plugin(uniqueValidator);
    mongoose.model("User", schema);
  }

  static getInstance() {
    this.initSchema();
    return mongoose.model("User");
  }
}

module.exports = User.getInstance();
