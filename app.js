var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));

app.get("/", function (req, res) {
  res.send("<html><head><link rel='stylesheet' href='/main.css'></head><body><h1>Hello World!</h1></body></html>");
});

app.listen(8080);
