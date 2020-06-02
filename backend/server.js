import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "./database/database";

var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "build")));

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
