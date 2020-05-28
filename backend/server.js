import express from "express";
import bodyParser from "body-parser";
import "./database/database";

var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "build")));

import userRoutes from "./routes/user";
userRoutes(app);


// app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`server started @localhost:${PORT}`);
});
