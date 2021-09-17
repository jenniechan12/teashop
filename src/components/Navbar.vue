<template lang="pug">
v-navigation-drawer.salmon.borderRight(app, expand-on-hover, dark)
	v-list(nav, dense)
		v-list-item(v-for="item in links" :key="item.text" link)
			v-list-item-icon
				v-icon.material-icons {{ item.icon }}
			v-list-item-title {{ item.text }}
</template>
<script>
export default {
	data() {
		return {
			links: [
				{ icon: "home", text: "Home" },
				{ icon: "menu_book", text: "Menu" },
				{ icon: "event", text: "Order History" },
				{ icon: "credit_card", text: "Payment" },
				{ icon: "favorite", text: "Favorites" },
			],
		};
	},
};
</script>
<style scoped>
.borderRight {
	border-radius: 0 24px 24px 0;
}
.salmon {
	background-color: #f97778 !important;
}
</style>