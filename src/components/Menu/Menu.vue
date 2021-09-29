<template lang="pug">
div
	v-row
		v-col(cols='12')
			v-spacer
			v-btn(v-if='!isEditMode' icon @click='isEditMode=true;')
				v-icon.material-icons edit
			v-btn(v-else icon @click='OpenAddMenu')
				v-icon.material-icons add
	SearchBar
	Promotion
	v-row.ma-0
		v-col(cols='12' sm='10' md='8')
			v-row.mr-4
				v-col.d-flex.flex-column(v-for='(item, index) in items' :key='index' cols='4')
					v-card.d-flex.flex-column.flex.rounded-xl(flat @click='OpenAddCart(item)')
						v-card-text.flex()
							v-row(align='start' justify='center' no-gutters)
								v-col.mt-4(cols='12')
									v-icon.material-icons.pl-4.pr-2(small color='#f97778') star 
									span.body-2 {{ FormatReviews(item) }}
							v-row(align='center' justify='center' no-gutters)
								v-col(cols='8')
									v-card-title {{ item.name }}
									v-card-subtitle {{ item.description }}
								v-col(cols='4')
									v-avatar(size='48' color='#f97778')
										v-card-subtitle.white--text {{ InUSD(item.price) }}
	MenuCartDialog(:openMenuCart.sync='openMenuCart' :item.sync='selectedItem')
	AddMenu(:openAddMenu.sync='openAddMenu')


</template>
<script>
import { mapGetters } from 'vuex';
import SearchBar from './Search';
import Promotion from './Promotion';
import MenuCartDialog from './MenuCart';
import AddMenu from './AddMenu';

export default {
	components: {
		SearchBar,
		Promotion,
		MenuCartDialog,
		AddMenu
	},
	data() {
		return {
			isEditMode: false,
			openAddMenu: false,
			openMenuCart: false,
			selectedItem: {},
		};
	},
		computed: {
		...mapGetters({items: 'getMenuItems'})
	},
	beforeMount()
	{
		console.log('before mounted - menu');
		this.RetrieveMenuItems();
	},
	methods: {
		InUSD: function(price) {
			return `$${price.toFixed(2)}`;
		},
		FormatReviews: function(item) {
			console.log(item);
			return `${item.reviews}(${item.numberOfReviews})`;
		},
		OpenAddMenu: function()
		{
			this.openAddMenu = true;
		},
		OpenAddCart: function(item) {
			this.selectedItem = item;
			this.openMenuCart = true;
			// console.log(this.selectedItem);
		},
		RetrieveMenuItems: function()
		{
			this.$socket.client.emit('RetrieveMenuItems'); 
		}
	},
	sockets:
	{
		RETRIEVE_MENU_ITEMS: function(data){
			console.log(data);
			this.$store.commit('updateMenuItems', data.items);
		}
	}
};
</script>
