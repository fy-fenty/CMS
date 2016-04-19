var BaseDao = require('./BaseDao');

var CommodityDao = function() {
	this.__tableName = "Commodity";
};

CommodityDao.prototype = new BaseDao();

CommodityDao.prototype.add = function(doc, settings) {
	var that = this;
	this.connect({
		success: function(db) {
			var collection = db.collection(that.__tableName);
			that.insert(db, collection, doc, settings);
		},
		error: function(err, db) {
			if(settings.error) {
				settings.error(err, db);
			}
		}
	});
};

CommodityDao.prototype.delete = function(id) {
	return true;
};

CommodityDao.prototype.update = function(Commodity) {
	return true;
};

CommodityDao.prototype.list = function(params, settings) {
	var that = this;
	this.connect({
		success: function(db) {
			var collection = db.collection(that.__tableName);
			that.find(db, collection, params, settings);
		},
		error: function(err, db) {
			if(settings.error) {
				settings.error(err, db);
			}
		}
	});
};

module.exports = CommodityDao;