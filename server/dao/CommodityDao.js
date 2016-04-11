var BaseDao = require('./BaseDao');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/CMS';

module.exports = {
	__tableName: "Commodity",

	add: function(doc, callback) {
		var that = this;
		MongoClient.connect(url, function(err, db) {
			db.collection(that.__tableName).insertOne({
				'test': 'test'
			}, function(err, result) {
				assert.equal(err, null);
				console.log("Inserted a document into the restaurants collection.");
				callback(result);
			});
		});
	},

	delete: function(id) {
		return true;
	},

	update: function(Commodity) {
		return true;
	},

	list: function(callback) {
		var that = this;
		MongoClient.connect(url, function(err, db) {
			var collection = db.collection(that.__tableName);
			collection.find().toArray(function(err, result) {
				if (err) {
					console.log('Error: ' + err);
				} else {
					callback(result);
				}
				db.close();
			});
		});
	}
}