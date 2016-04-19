var url = require('url');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());
var urlEncodedParser = bodyParser.urlencoded({ extended: false });

var baseDir = __dirname + '/';

app.use('/static', express.static('node_modules'));
app.use('/static', express.static('resources'));
app.use(function(req, res, next) {
	console.log(JSON.stringify(req.cookies));
	next();
});

app.get('/', function(req, res) {
	res.sendFile(baseDir + 'index.html');
});

app.get('/*.html', function (req, res) {
	var reqUrl = url.parse(req.url);
	var pathName = reqUrl.pathname;
	res.sendFile(baseDir + pathName);
});

require('./server/control/CommodityControl').listen(app);

app.listen('8000', function() {
	console.log('Server is listening');
});