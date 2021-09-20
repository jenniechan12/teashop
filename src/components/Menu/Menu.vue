<template lang="pug">
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


</template>
<script>
import MenuCartDialog from './MenuCart';

export default {
	components: {
		MenuCartDialog,
	},

	data() {
		return {
			items: [
				{
					name: 'Almond Milk Tea',
					description: 'blah blah blah blah blah',
					price: 4.5,
					addOns: [],
					tags: [],
					reviews: 5.0,
					numberOfReviews: 123,
				},
				{
					name: 'Almond Milk Tea',
					description: '',
					price: 4.5,
					addOns: [],
					tags: [],
					reviews: 5.0,
					numberOfReviews: 123,
				},
				{
					name: 'Almond Milk Tea',
					description: '',
					price: 4.5,
					addOns: [],
					tags: [],
					reviews: 5.0,
					numberOfReviews: 123,
				},
				{
					name: 'Almond Milk Tea',
					description: '',
					price: 4.5,
					addOns: [],
					tags: [],
					reviews: 5.0,
					numberOfReviews: 123,
				},
				{
					name: 'Almond Milk Tea',
					description: '',
					price: 4.5,
					addOns: [],
					tags: [],
					reviews: 5.0,
					numberOfReviews: 123,
				},
				{
					name: 'Almond Milk Tea',
					description: '',
					price: 4.5,
					addOns: [],
					tags: [],
					reviews: 5.0,
					numberOfReviews: 123,
				},
				{
					name: 'Almond Milk Tea',
					description: '',
					price: 4.5,
					addOns: [],
					tags: [],
					reviews: 5.0,
					numberOfReviews: 123,
				},
				{
					name: 'Almond Milk Tea',
					description: '',
					price: 4.5,
					addOns: [],
					tags: [],
					reviews: 5.0,
					numberOfReviews: 123,
				},
				{
					name: 'Almond Milk Tea',
					description: '',
					price: 4.5,
					addOns: [],
					tags: [],
					reviews: 5.0,
					numberOfReviews: 123,
				},
				{
					name: 'Almond Milk Tea',
					description: '',
					price: 4.5,
					addOns: [],
					tags: [],
					reviews: 5.0,
					numberOfReviews: 123,
				},
				{
					name: 'Almond Milk Tea',
					description: '',
					price: 4.5,
					addOns: [],
					tags: [],
					reviews: 5.0,
					numberOfReviews: 123,
				},
				{
					name: 'Almond Milk Tea',
					description: '',
					price: 4.5,
					addOns: [],
					tags: [],
					reviews: 5.0,
					numberOfReviews: 123,
				},
				{
					name: 'Almond Milk Tea',
					description: '',
					price: 4.5,
					addOns: [],
					tags: [],
					reviews: 5.0,
					numberOfReviews: 123,
				},
				{
					name: 'Almond Milk Tea',
					description: '',
					price: 4.5,
					addOns: [],
					tags: [],
					reviews: 5.0,
					numberOfReviews: 123,
				},
				{
					name: 'Almond Milk Tea',
					description: '',
					price: 4.5,
					addOns: [],
					tags: [],
					reviews: 5.0,
					numberOfReviews: 123,
				},
			],
			selectedItem: {},
			openMenuCart: false,
		};
	},
	methods: {
		InUSD: function(price) {
			return `$${price.toFixed(2)}`;
		},
		FormatReviews: function(item) {
			return `${item.reviews.toFixed(1)}(${item.numberOfReviews})`;
		},
		OpenAddCart: function(item) {
			this.selectedItem = item;
			this.openMenuCart = true;
			// console.log(this.selectedItem);
		},
	},
};
</script>
