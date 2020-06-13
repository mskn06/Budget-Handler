const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const path = require("path");
const staticFilePath = path.join(__dirname, "./frontend/www/");

const PORT = process.env.PORT || 3000;
const app = express();

require("./database/database");

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// app.use(logger("dev"));

app.use(express.static(staticFilePath));

const userRoutes = require("./routes/user");
const projectRoutes = require("./routes/project");
const staffRoutes = require("./routes/staff");
userRoutes(app);
projectRoutes(app);
staffRoutes(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(staticFilePath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`server started @localhost:${PORT}`);
});
