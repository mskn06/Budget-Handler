const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const path = require("path");
require("./database/database");

var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(logger("dev"));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../frontend/www")));

const userRoutes = require("./routes/user");
const projectRoutes = require("./routes/project");
const staffRoutes = require("./routes/staff");
userRoutes(app);
projectRoutes(app);
staffRoutes(app);

// app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`server started @localhost:${PORT}`);
});
