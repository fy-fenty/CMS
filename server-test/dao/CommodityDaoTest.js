var CommodityDao = require('./../../server/dao/CommodityDao');
var assert = require('assert');
var commodityDao = new CommodityDao();

commodityDao.list({}, {
	success: function(data) {
		console.log(data);
	}
});