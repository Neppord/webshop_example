var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));

app.get("/", function (req, res) {
  res.render("index.jade");
});

app.get("/search", function (req, res) {
  res.render("search.jade", req.query);
})

app.listen(8080);
