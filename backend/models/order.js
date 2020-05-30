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
        orderAmount: {
          type: Number,
          required: true,
        },
        deliveryDate: {
          type: Date,
          required: true,
        },
        staffDetails: [
          {
            staffName: String,
            toPay: Number,
            paid: Date,
          },
        ],
        earning: Number,
        expense: Number,
        
        status: {
          type: String,
          enum: ["PENDING", "COMPLETE"],
          default: "PENDING",
        },
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
