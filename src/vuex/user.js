const userVuex = {
	state: {
		currentPage: 'Home',
		selectedPayment: {
			type: 'Discover',
			card: '0123456789012345',
			expire: '01/23',
		},
		currentPayments: [
			{ type: 'Discover', card: '0123456789012345', expire: '01/23' },
			{ type: 'American Express', card: '9876543210987654', expire: '12/34' },
			{ type: 'Visa', card: '0147852369014725', expire: '02/25' },
		],
		orderHistory: [],
	},
	getters: {
		getCurrentPage: function(state) {
			return state.currentPage;
		},
		getSelectedPayment: function(state) {
			return state.selectedPayment;
		},
		getCurrentPayments: function(state) {
			return state.currentPayments;
		},
		getOrderHistory: function(state) {
			return state.orderHistory;
		},
	},
	mutations: {
		updateCurrentPage: (state, payload) => {
			state.currentPage = payload;
		},
		updateSelectedPayment: (state, payload) => {
			state.selectedPayment = payload;
		},
		updateCurrentPayments: (state, payload) => {
			state.currentPayments = payload;
		},
		updateOrderHistory: (state, payload) => {
			state.orderHistory = payload;
		},
	},
	actions: {},
};

module.exports = userVuex;
