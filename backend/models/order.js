import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

class Order {

  initSchema() {
    const schema = new Schema({
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
      staffDetails:[
        {
          staffName: String,
          toPay: Number,
          paid: Date
        }
      ],
      staff: [
        {
          type: Schema.Types.ObjectId,
          ref: "Staff",
        },
      ],
    }, { timestamps: true });
   
    schema.plugin(uniqueValidator);
    mongoose.model("Order", schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("Order");
  }
}

export default Order;
