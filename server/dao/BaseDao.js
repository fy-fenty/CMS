var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/CMS';

var BaseDao = function() {

};

BaseDao.prototype.connect = function(callback) {
	MongoClient.connect(url, function(err, db) {
		if(err) {
			console.log(err);
		} else {
			callback(db);
		}
	});
};

BaseDao.prototype.insert = function(collection, obj, callback) {
	collection.insert(obj, function(err, result) {
		if(err) {
			console.log(err);
		} else {
			callback(result);
		}
	});
};

BaseDao.prototype.find = function(collection, params, callback) {
	collection.find(params || {}).toArray(function(err, result) {
		if (err) {
			console.log(err);
		} else {
			callback(result);
		}
	});
};
module.exports = BaseDao;