var MongoClient = require('mongodb').MongoClient;
var BaseDao = {
	db: null,

	initDb: function() {
		var that = this;
		MongoClient.connect(url, function(err, db) {
			that.db = db;
		});
	},

	insert: function(collection, obj, callback) {
		collection.insert(obj, function(err, result) {
			callback(result);
		});
	},

	find: function(collection, params, callback) {
		collection.find(params || {}).toArray(function(err, result) {
			if (err) {
				console.log(err);
			} else {
				callback(result);
			}
		});
	}
}
module.exports = BaseDao;