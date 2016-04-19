var CommodityService = require('./../service/CommodityService');

var commodityService = new CommodityService();

exports.listen = function(app) {
	app.get('/commodity(/*)?', function(req, res) {
		var reqParams = req.params || {};
		var params = {};

		var isGetOne = false;
		if(reqParams[1]) {
			params.id = reqParams[1];
			isGetOne = true;
		}
		commodityService.findCommodity(params, {
			success: function(data) {
				res.send(isGetOne ? data[0] : data);
			},
			error: function(err, data) {
				res.status(500).send(err);				
			}
		});
	});
};