import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

class Order {
  initSchema() {
    const schema = new Schema(
      {
        projectName: {
          type: String,
          required: true,
        },
        deliveryDate: {
          type: Date,
          required: true,
        },
        totalAmount: {
          type: Number,
          required: true,
        },
        amtToBePaid: {
          type: Number,
          default: 0,
        },
        amtUsed: {
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
        status: {
          type: String,
          enum: ["PENDING", "COMPLETE"],
          default: "PENDING",
        },
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
    mongoose.model("Order", schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("Order");
  }
}

export default Order;
