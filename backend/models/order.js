const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderModel = Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    orderAmount: {
      type: Number,
      required: true,
    },
    deliveryDate: {
      type: Date,
      required: true,
    },
    staff: [
      {
        type: Schema.Types.ObjectId,
        ref: "Staff",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderModel);
