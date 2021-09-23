<template lang="pug">
v-dialog(v-model='openAddMenu', transition='dialog-bottom-transition', width='60%' persistent)
	v-card(flat)
		v-toolbar.salmon(flat, dark)
			v-btn(icon, @click="CloseAddMenu()")
				v-icon.material-icons close
			v-toolbar-title Add Menu
		v-card-text
			//- Menu Item's Name
			v-card-subtitle <b>Item</b>
				v-text-field.rounded-md.my-4(
					v-model='name',
					outlined,
					flat,
					dense,
					hide-details,
					label='Item',
					color='#f9777875'
				)

			//- Menu Item's Description
			v-card-subtitle <b>Description</b>
				v-textarea.rounded-md.my-4(
					v-model='description',
					outlined,
					flat,
					dense,
					hide-details,
					rows='2',
					row-height='20',
					placeholder='Description',
					color='#f9777875'
				)

			//- Menu Item's Price
			v-card-subtitle <b>Price</b>
				v-text-field.rounded-md.my-4(
					v-model='price',
					prefix='$',
					outlined,
					flat,
					dense,
					hide-details,
					placeholder='Price',
					color='#f9777875'
				)

			//- Categories
			v-card-subtitle <b>Tags/Categories</b>
				v-row(v-if='tags.length > 0')
					v-col(cols='12')
						v-chip.ma-2(v-for='item in selectedTags', :key='item', color='#f0f4f7f5') {{ item }}

				v-row(align='center', justify='center')
					v-col(v-show='showTags', cols='12', sm='8')
						v-combobox.rounded-md.my-4(
							v-model='selectedTags',
							:items='tags',
							outlined,
							flat,
							dense,
							hide-details,
							multiple,
							placeholder='Tag/Category',
							color='#f9777875'
						)

					v-spacer
					v-col(cols='12', sm='2')
						v-btn(text, @click='ShowTagsToggle()') {{ ShowTagsText() }}
		v-divider.mx-4
		v-card-actions
			v-row.ma-4(align='center', justify='center', no-gutters)
				v-col(cols='12')
					v-btn.mr-8(depressed, dark, color='#f97778' @click='ResetForm()') Clear
					v-btn(depressed, dark, color='#f97778' @click='AddMenu()') Add Menu
</template>
<script src="../../backend/models/item.js"></script>
<script>
const ItemClass = require("../../backend/models/item.js");

export default {
	props: {
		openAddMenu: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			name: '',
			description: '',
			price: 0,
			selectedTags: [],
			tags: ["Milk Tea", "Fruit Tea"],

			showTags: false,
		};
	},
	methods: {
		ShowTagsToggle: function () {
			this.showTags = !this.showTags;
		},
		ShowTagsText: function () {
			if (this.showTags) return '- Hide';
			else return '+ Tags';
		},
		CloseAddMenu: function()
		{
			this.$emit('update:openAddMenu', false);
		},
		AddMenu: function () {
			// Random Generate 4-5 stars review
			let reviews = (Math.random() + 4).toFixed(1);
			
			// Random Generate Number of Reviews (40-250)
			let min = 40, max= 250;
			let numberOfReviews = Math.floor(Math.random() * (max-min + 1) + min);

			let item = new ItemClass.Item(this.name, this.description, this.price, this.selectedTags, reviews, numberOfReviews);
			console.log(this.$socket);
			console.log('hey');

			this.$socket.client.emit('AddMenuItem', item);
		},
		ResetForm: function()
		{
			this.name = '';
			this.description = '';
			this.price = 0;
			this.selectedTags = [];
		}
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
