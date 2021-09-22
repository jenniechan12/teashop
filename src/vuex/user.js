const userVuex = {
	state: {
		currentPage: 'Home',
	},
	getters: {
		getCurrentPage: function(state) {
			return state.currentPage;
		},
	},
	mutations: {
		updateCurrentPage: (state, payload) => {
			state.currentPage = payload;
		},
	},
	actions: {},
};

module.exports = userVuex;
