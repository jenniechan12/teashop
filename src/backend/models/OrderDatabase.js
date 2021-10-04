const mongo = require('../mongo/connect');

module.exports = (io) => {
	io.on('connection', (socket) => {
		socket.on('RetrieveOrders', async () => {
			// Retrieve Orders from DB
			let database = mongo.getDB();
			let orders = await database
				.db(process.env.DATABASE)
				.collection('Items')
				.find({}, { $sort: { orderCompletedDate: -1 } });

			// Send Orders to front end
			io.to(socket.id).emit('RETRIEVE_ORDERS', {
				orders: orders,
			});
		});

		socket.on('AddOrders', async (order) => {
			console.log(order);
		});
	});
};
