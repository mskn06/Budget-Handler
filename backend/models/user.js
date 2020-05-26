const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    clearanceTime: {
      type: Number,
      default: 21,
    },
    numberOfOrders: {
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
    amtUsed: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userModel);
