var CommodityDao = require("./../dao/CommodityDao");

var CommodityService = function() {

};

CommodityService.prototype.findCommodity = function(params, settings) {
	var commodityDao = new CommodityDao();
	commodityDao.list(params, settings);
};

module.exports = CommodityService;