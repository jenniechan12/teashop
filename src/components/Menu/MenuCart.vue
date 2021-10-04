<template lang="pug">
v-dialog(v-model="openMenuCart", persistent, max-width="600px")
	v-card
		v-card-title 
			v-btn(icon, @click="CloseMenuCart()")
				v-icon.material-icons close
		v-card-text
			h4 {{ item.name }}
			.subtitle-2 {{ item.description }}
			v-img(src='https://www.thespruceeats.com/thmb/c52UHmU21owd5YrxR3v_DtGS3AI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/types-of-bubble-tea-766451-hero-01-a6dca4dd096a4d8abdde1a754766f851.jpg' stretch aspect-ratio='3' max-height='250')
		v-card-text.scrollable 
			//- Size Options
			.subtitle-2 Size
			v-radio-group.ml-3(v-model='size' mandatory)
				template(v-for='size in sizes')
					v-radio(:key='size.item' :value='size.item' color="#f97778" @change='UpdateSize(size)')
						template(v-slot:label)
							span {{ size.item }}
							v-spacer
							span {{ USDFormat(size.price) }}
			
			//- Add Ons Options
			.subtitle-2 Add Ons 
			v-checkbox.ml-3(v-for='item in addOns' :key='item.item' v-model='selectedAddOns' :value='item' color="#f97778" hide-details @change='UpdateAddOns(item)')
				template(v-slot:label)
					span {{ item.item }}
					v-spacer
					span {{ USDFormat(item.price) }}
			
			//- Ice Level Options
			.subtitle-2.mt-4 Ice Level
			v-radio-group.ml-3(v-model='iceLevel' mandatory)
				template(v-for='item in iceLevels')
					v-radio(:key='item' :value='item' :label='item' color="#f97778")
			
			//- Sweetness Level Options
			.subtitle-2 Sweetness Level
			v-radio-group.ml-3(v-model='sweetnessLevel' mandatory)
				template(v-for='item in sweetnessLevels')
					v-radio(:key='item' :value='item' :label='item' color="#f97778")
		v-divider
		v-card-actions
			v-spacer
			//- Quantity
			v-btn(
				icon,
				small,
				@click="DecreaseQuantity()",
				:disabled="quantity <= minQuantity"
			)
				v-icon.material-icons remove_circle_outline
			input#quantityInput.text-center(
				v-model="quantity",
				min="1",
				max="999",
				:maxlength="maxLength",
				v-mask='"###"'
			)
			v-btn(
				icon,
				small,
				@click="IncreaseQuantity()",
				:disabled="quantity >= maxQuantity"
			)
				v-icon.material-icons add_circle_outline

			//- Add To Cart Button
			v-btn.rounded-xl(color="#f97778", dark @click='AddToCart()') {{ updateCheckoutText }}
</template>
<script>
export default {
	props: {
		openMenuCart: {
			type: Boolean,
			default: false,
		},
		item: {
			type: Object,
			default() {
				return {
					name: '',
					description: '',
					price: 0,
					addOns: [],
					tags: [],
				};
			},
		},
	},
	computed: {
		updateCheckoutText: function() {
			if (this.item.price)
				return `Add to cart - $${(
					this.quantity *
					(this.item.price + this.total)
				).toFixed(2)}`;
			else return ``;
		},
	},
	data() {
		return {
			// Item Quantity
			maxLength: 3,
			maxQuantity: 999,
			minQuantity: 1,
			quantity: 1,

			previousSelectedSize: 'Regular',
			total: 0,

			// Tea Options
			size: 'Regular',
			iceLevel: 'Regular Ice',
			sweetnessLevel: '100%',

			sizes: [
				{ item: 'Regular', price: 0 },
				{ item: 'Large', price: 1 },
				{ item: 'X-Large', price: 1.5 },
			],
			addOns: [
				{ item: 'Aloe Jelly', price: 0.75 },
				{ item: 'Tapioca Boba', price: 0.5 },
				{ item: 'Crystal Boba', price: 0.75 },
				{ item: 'Herbal Jelly', price: 0.5 },
				{ item: 'Mango Jelly', price: 0.5 },
				{ item: 'Milk Cap', price: 1.0 },
				{ item: 'Nata Jelly', price: 0.5 },
				{ item: 'Oreo', price: 0.5 },
				{ item: 'Popping Coffee Boba', price: 0.75 },
				{ item: 'Popping Grape Boba', price: 0.75 },
				{ item: 'Popping Mango Boba', price: 0.75 },
				{ item: 'Red Bean', price: 0.5 },
			],
			iceLevels: ['Less Ice', 'No Ice', 'Regular Ice'],
			sweetnessLevels: ['0%', '25%', '50%', '75%', '100%'],

			// User Order
			selectedAddOns: [],
		};
	},
	methods: {
		CloseMenuCart: function() {
			this.total = 0;
			this.quantity = 1;
			this.$emit('update:openMenuCart', false);
		},
		AddToCart: function(){
			let menuItem = {
				item: this.item,
				size: this.size,
				addOns: this.addOns,
				iceLevel: this.iceLevel,
				sweetnessLevel: this.sweetnessLevel,
				subtotal: this.total
			};

			let order = {
				menuItem,
				quantity: this.quantity
			};

			console.log(order);
			this.$emit('addToCart', this.order);
		},
		USDFormat: function(price) {
			if (price === 0) return ``;
			else return `+$${price.toFixed(2)}`;
		},
		AddToTotal: function(price) {
			this.total += price;
		},
		RemoveFromTotal: function(price) {
			this.total -= price;
		},
		IncreaseQuantity: function() {
			if (this.quantity >= 999) this.quantity = 999;
			else this.quantity++;
		},
		DecreaseQuantity: function() {
			if (this.quantity <= 1) this.quantity = 1;
			else this.quantity--;
		},
		UpdateSize: function(value) {
			// If size have been updated, adjust the total based on size's pricing
			if (this.previousSelectedSize != value) {
				let size = this.sizes.find((x) => x === this.previousSelectedSize);
				if (size) this.RemoveFromTotal(size.price);

				this.AddToTotal(value.price);
				this.previousSelectedSize = value;
			}
		},
		UpdateAddOns: function(value) {
			if (this.selectedAddOns.includes(value)) this.AddToTotal(value.price);
			else this.RemoveFromTotal(value.price);
		},
	},
};
</script>
<style lang="sass" scoped>
#quantityInput
	max-width: 2rem
.scrollable
	height: 400px
	overflow-y: auto
</style>
