<template lang="pug">
//- v-dialog(v-model='openAddMenu' transition='dialog-bottom-transition')
v-card(flat, width="60%")
	v-toolbar.salmon(flat, dark)
		v-toolbar-title Add Menu
	v-card-text
		v-text-field.rounded-md.my-4(
			outlined,
			flat,
			dense,
			hide-details,
			placeholder="Item",
			color="#f9777875"
		)
		v-textarea.rounded-md.my-4(
			outlined,
			flat,
			dense,
			hide-details,
			rows="2",
			row-height="20",
			placeholder="Description",
			color="#f9777875"
		)
		v-text-field.rounded-md.my-4(
			outlined,
			flat,
			dense,
			hide-details,
			placeholder="Price",
			color="#f9777875"
		)

		//- Add Ons
		v-card-subtitle <b>Add Ons</b>
		v-row
			v-col(v-show="false", cols="12", sm="10")
				v-autocomplete.rounded-md.my-4(
					outlined,
					flat,
					dense,
					hide-details,
					placeholder="Add Ons",
					color="#f9777875"
				)
			v-spacer(v-if="true")
			v-col(cols="12", sm="2")
				v-btn(text) + Add Ons
		//- Categories
		v-card-subtitle <b>Tags/Categories</b>
		v-row
			v-col(v-show="true", cols="12" sm='8')
				v-autocomplete.rounded-md.my-4.mx-4(
					outlined,
					flat,
					dense,
					hide-details,
					placeholder="Tag/Category",
					color="#f9777875"
				)
			v-spacer(v-if="true")
			v-col(cols="12", sm="2")
				v-btn(text) + Tags

	v-card-actions
		v-row(align="center", justify="center", no-gutters)
			v-col(cols="12")
				v-btn.mr-8(depressed, dark, color="#f97778") Clear
				v-btn(depressed, dark, color="#f97778") Add Menu
</template>
<script src="../../backend/models/item.js"></script>
<script>
require("../../backend/models/item.js");

export default {
	data() {
		return {
			name: "",
			description: "",
			price: 0,
			addOns: [],
			tags: [],
		};
	},
	methods: {
		AddMenu: () => {
			let item = new Item(name, description, price, addOns, tags);
			console.log(item);
		},
	},
};
</script>
<style scoped>
.salmon {
	background-color: #f97778 !important;
}
.whiteSmoke {
	background-color: #f0f4f7f5 !important;
}
</style>