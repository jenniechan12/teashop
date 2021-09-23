const mongo = require('../mongo/connect');
let ObjectId = require('mongodb').ObjectId;

module.exports = (io) => {
	io.on('connection', (socket) => {
		// Add Menu Item to Database
		socket.on('AddMenuItem', async (item) => {
			console.log(item);
			// let database = mongo.getDB();
			// let newItem = await database
			// 	.db(process.env.DATABASE)
			// 	.collection('Items')
			// 	.insert(item);

			// console.log(newItem);
		});

		// Remove Menu Item to Database
		socket.on('RemoveMenuItem', async (item) => {
			let database = mongo.getDB();
			let removedItem = await database
				.db(process.env.DATABASE)
				.collection('Items')
				.deleteOne({ _id: ObjectId(item._id) });
			console.log(removedItem);
		});
	});
};
