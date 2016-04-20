var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/CMS';

var BaseDao = function() {

};

var processResult = function(err, obj, settings) {
	console.log(settings);
	if(err) {
		if(settings.error) {
			settings.error(err, obj);
		}
	} else {
		if(settings.success) {
			settings.success(obj);
		}
	}
}

BaseDao.prototype.connect = function(settings) {
	MongoClient.connect(url, function(err, db) {
		processResult(err, db, settings);
	});
};

BaseDao.prototype.insert = function(db, collection, obj, settings) {
	collection.insert(obj, function(err, result) {
		processResult(err, result, settings);
		db.close();
	});
};

BaseDao.prototype.find = function(db, collection, params, settings) {
	var query = collection.find(params || {});
	if(settings.byPage) {
		query.skip(settings.page.skip).limit(settings.page.limit);
	}
	query.toArray(function(err, result) {
		processResult(err, result, settings);
		db.close();
	});
};
module.exports = BaseDao;