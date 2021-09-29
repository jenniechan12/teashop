import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { VueMaskDirective } from 'v-mask';

// Vuex
Vue.use(Vuex);
import userVuex from './vuex/user';
import itemVuex from './vuex/items';

const store = new Vuex.Store({ modules: { user: userVuex, items: itemVuex } });

Vue.config.productionTip = false;
Vue.directive('mask', VueMaskDirective);

// Sockets
import VueSocketIO from 'vue-socket.io-extended';
import { io } from 'socket.io-client';

const socket = io(`http://${window.location.hostname}:80`);
Vue.use(VueSocketIO, socket, { store });

new Vue({
	vuetify,
	store,

	render: (h) => h(App),
}).$mount('#app');
