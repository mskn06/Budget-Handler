var express = require('express');
require('./database/database')

var app = express();

var userRouter = require("./routes/user");
// var workRouter = require("./routes/work");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "build")));


app.use("/api", userRouter);
// app.use("/api/work", workRouter);


// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });


app.listen(3000, () => {
  console.log('server started @localhost:3000');
});