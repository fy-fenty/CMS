var CommodityService = require('./../service/CommodityService');

var commodityService = new CommodityService();

var CommodityControl = function(req, res) {
	res.send(req);
};

module.exports = CommodityControl;