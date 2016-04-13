var BaseDao = require('./BaseDao');

var CommodityDao = function() {
	this.__tableName = "Commodity";
};

CommodityDao.prototype = new BaseDao();

CommodityDao.prototype.add = function(doc, callback) {
	var that = this;
	this.connect(function(db) {
		var collection = db.collection(that.__tableName);
		that.insert(collection, {}, function(data) {
			callback(data);
			db.close();
		});
	});
};

CommodityDao.prototype.delete = function(id) {
	return true;
};

CommodityDao.prototype.update = function(Commodity) {
	return true;
};

CommodityDao.prototype.list = function(callback) {
	var that = this;
	this.connect(function(db) {
		var collection = db.collection(that.__tableName);
		that.find(collection, {}, function(data) {
			callback(data);
			db.close();
		});
	});
};

module.exports = CommodityDao;