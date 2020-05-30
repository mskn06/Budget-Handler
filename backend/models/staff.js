import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

class Staff {
  initSchema() {
    const schema = new Schema(
      {
        staffName: {
          type: String,
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
        amtEarned: {
          type: Number,
          default: 0,
        },
        projects: {
          type: Number,
          default: 0,
        },
        orders: [
          {
            type: Schema.Types.ObjectId,
            ref: "Order",
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
