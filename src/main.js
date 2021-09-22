import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { VueMaskDirective } from 'v-mask';

// Vuex
import userVuex from './vuex/user';

Vue.config.productionTip = false;
Vue.directive('mask', VueMaskDirective);
Vue.use(Vuex);

// New Vuex
const store = new Vuex.Store({ modules: { user: userVuex } });

new Vue({
	vuetify,
	store,
	render: (h) => h(App),
}).$mount('#app');
