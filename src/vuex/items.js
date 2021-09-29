const itemVuex = {
	state: {
		menuItems: [],
		tags: [],
	},
	getters: {
		getMenuItems: function(state) {
			return state.menuItems;
		},
		getTags: function(state) {
			return state.tags;
		},
	},
	mutations: {
		updateMenuItems: (state, payload) => {
			state.menuItems = payload;
		},
		updateTags: (state, payload) => {
			state.tags = payload;
		},
	},
	actions: {},
};

module.exports = itemVuex;
