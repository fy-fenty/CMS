var url = require("url");
var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());
var urlEncodedParser = bodyParser.urlencoded({ extended: false });

var baseDir = __dirname + "/";

app.get("/", function(req, res) {
	res.send("Cookies:" + JSON.stringify(req.cookies));
});

app.get("*.html", function (req, res) {
	var reqUrl = url.parse(req.url);
	var pathName = reqUrl.pathname;
	res.sendFile(baseDir + pathName);
});

app.get("/commodity/*", require('./server/control/CommodityControl'));

app.listen("8000", function() {
	console.log("Server is listening");
});