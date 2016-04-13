var CommodityDao = require('./../../server/dao/CommodityDao');
var assert = require('assert');
var commodityDao = new CommodityDao();

commodityDao.list(function(data) {
	assert.equal(data.length, 20, 'error');
});