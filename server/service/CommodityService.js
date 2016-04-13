var CommodityDao = require("./../dao/CommodityDao");

var CommodityService = function() {

};

CommodityService.prototype.findCommodity = function() {
	var commodityDao = new CommodityDao();
	commodityDao.list(function(data) {
		
	});
};

module.exports = CommodityService;