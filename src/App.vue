
<template lang="pug">
v-app.whiteSmoke
	NavBar
	v-main
		v-container.ml-4(fluid)
			Payment
			//- SearchBar
			//- Promotion
			//- Menu
			//- AddMenu
			//- HelloWorld
			//- CheckOutNav
</template>

<script>
import NavBar from "./components/Navbar";
import SearchBar from "./components/Menu/Search";
import Promotion from "./components/Menu/Promotion";
import CheckOutNav from "./components/Menu/CheckOutNav";
import AddMenu from "./components/Menu/AddMenu";
import Menu from './components/Menu/Menu';
import Payment from './components/Payment/Payment'

export default {
	name: "App",

	components: {
		NavBar,
		SearchBar,
		Promotion,
		CheckOutNav,
		AddMenu,
		Menu,
		Payment
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
