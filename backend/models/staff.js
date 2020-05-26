const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffModel = Schema(
  {
    memberName: {
      type: String,
      required: true,
    },
    amtPaid: Number,
    amtEarned: Number,
    projects: Number,
    ToPay: Number,

    order: [
      {
        type: Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Staff", staffModel);
