const mongo = require('../mongo/connect');
let ObjectId = require('mongodb').ObjectId;

module.exports = (io) => {
	io.on('connection', (socket) => {
		// Add Menu Item to Database
		socket.on('AddMenuItem', async (item) => {
			console.log(item);
			let database = mongo.getDB();
			let newItem = await database
				.db(process.env.DATABASE)
				.collection('Items')
				.insert(item);

			console.log(newItem);
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

		// Get All Menu Items
		socket.on('RetrieveMenuItems', async () => {
			console.log('Get Menu Items');
			let database = mongo.getDB();
			let items = await database
				.db(process.env.DATABASE)
				.collection('Items')
				.find({}, { $sort: { name: 1 } })
				.toArray();

			console.log(items);

			// Get Distinct Tags
			let tags = [];
			items.forEach((item) => {
				item.tags.forEach((tag) => {
					if (!tags.includes(tag)) tags.push(tag);
				});
			});

			console.log(tags);

			io.to(socket.id).emit('RETRIEVE_MENU_ITEMS', {
				items: items,
				tags: tags,
			});
		});
	});
};
