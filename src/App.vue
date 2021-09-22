
<template lang="pug">
v-app.whiteSmoke
	NavBar
	Alert
	v-main
		v-container.ml-4(fluid)
			Home(v-if='currentPage === "Home"')
			Menu(v-else-if='currentPage === "Menu"')
			OrderHistory(v-else-if='currentPage === "Order History"')
			Payment(v-else-if='currentPage == "Payment"')
			//- AddMenu
			//- HelloWorld
			//- CheckOutNav
</template>

<script>
import NavBar from "./components/Navbar";
import Alert from "./components/Home/Alert";
import Home from "./components/Home/Home";
import CheckOutNav from "./components/Menu/CheckOutNav";
import AddMenu from "./components/Menu/AddMenu";
import Menu from './components/Menu/Menu';
import Payment from './components/Payment/Payment';
import OrderHistory from './components/OrderHistory/OrderHistory';

// Vuex
import { mapGetters } from 'vuex'

export default {
	name: "App",

	components: {
		NavBar,
		Alert,
		Home,
		CheckOutNav,
		AddMenu,
		Menu,
		Payment,
		OrderHistory
	},
	computed: {
		...mapGetters({currentPage: 'getCurrentPage'})
	},
	data: () => ({
		//
	}),
};
</script>
<style scoped>
.whiteSmoke {
	background-color: #f0f4f7f5 !important;
}
</style>
