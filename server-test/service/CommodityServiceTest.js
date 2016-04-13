var CommodityService = require('./../../server/service/CommodityService');

var commodityService = new CommodityService();

commodityService.findCommodity(function(data) {
	assert.equal(data.length, 20, 'error');
});