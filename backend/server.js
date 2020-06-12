import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
var logger = require("morgan");
import path from "path";
import "./database/database";

var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(logger("dev"));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../frontend/www")));

import userRoutes from "./routes/user";
import projectRoutes from "./routes/project";
import staffRoutes from "./routes/staff";
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
