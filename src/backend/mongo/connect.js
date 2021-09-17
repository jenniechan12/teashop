let MongoClient = require('mongodb').MongoClient;
let database;

module.exports = {
	connect: (uri, callback) => {
		MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
			if (err) console.error(err);
			else {
				console.log('Connected to MongoDB server');
				database = db;
				callback();
			}
		});
	},
	getDB: () => {
		return database;
	},
};
