import mongoose from "mongoose";

class Connection {
  constructor() {
    const url =
      process.env.MONGODB_URI ||  `mongodb+srv://${"budgethandler"}:${"MD5qmOlqAXFWKfWe"}@project-ppgo7.mongodb.net/${"Budget"}?retryWrites=true&w=majority`;
    console.log("Established new db connection");
    mongoose.Promise = global.Promise;
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useUnifiedTopology", true);
    mongoose.connect(url);
  }
}

export default new Connection();