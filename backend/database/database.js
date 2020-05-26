const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://${"budgethandler"}:${"MD5qmOlqAXFWKfWe"}@project-ppgo7.mongodb.net/${"Budget"}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log("mongo error" + err);
    else console.log("Db connected...");
  }
);
