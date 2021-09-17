
<template lang="pug">
v-app.whiteSmoke
	NavBar
	v-main
		v-container.ml-4(fluid)
			SearchBar
			Promotion
			//- HelloWorld
			CheckOutNav
</template>

<script>
import NavBar from "./components/Navbar";
import SearchBar from "./components/Menu/Search";
import Promotion from "./components/Menu/Promotion";
import HelloWorld from "./components/HelloWorld";
import CheckOutNav from "./components/Menu/CheckOutNav.vue";

export default {
	name: "App",

	components: {
		HelloWorld,
		NavBar,
		SearchBar,
		Promotion,
		CheckOutNav,
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
