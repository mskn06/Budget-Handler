var express = require('express');
require('./database/database')

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('server started @localhost:3000');
});