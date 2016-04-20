var CommodityService = require('./../service/CommodityService');
var Constant = require('./../util/Constant');

var commodityService = new CommodityService();

exports.listen = function(app) {
	app.get('/commodity(/*)?', function(req, res) {
		var reqParams = req.params || {};
		var reqQuery = req.query || {};
		var params = {};
		var settings = {
			success: function(data) {
				res.send(isGetOne ? data[0] : data);
			},
			error: function(err, data) {
				res.status(500).send(err);				
			}
		};
		var isGetOne = false;
		if(reqParams[1]) {
			params.name = reqParams[1];
			isGetOne = true;
		}
		if(!isGetOne) {
			reqQuery.page = reqQuery.page || 1;
			reqQuery.page = reqQuery.page < 1 ? 1 : reqQuery.page;
			settings.byPage = true;
			settings.page = {
				skip: (reqQuery.page - 1) * Constant.PAGESIZE,
				limit: Constant.PAGESIZE
			};
		}
		commodityService.findCommodity(params, settings);
	});
};