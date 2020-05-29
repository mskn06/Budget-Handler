import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

class Staff {

  initSchema() {
    const schema = new Schema({
      staffName: {
        type: String,
        required: true,
      },
      amtPaid: Number,
      amtEarned: Number,
      projects: Number,
      toPay: Number,
  
      order: [
        {
          type: Schema.Types.ObjectId,
          ref: "Order",
        },
      ],
    }, { timestamps: true });
   
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
