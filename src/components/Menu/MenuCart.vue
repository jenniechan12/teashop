<template lang="pug">
v-dialog(v-model='openMenuCart', persistent, max-width='600px')
    v-card
        v-card
            v-card-title 
                v-btn(icon @click='CloseMenuCart()')
                    v-icon.material-icons close
            v-card-text
                h4 {{ item.name }}
                .subtitle-2 {{ item.description }}
            v-card-text(height='60%') 
                .subtitle-2 Size
                v-radio-group.ml-3(v-model='size')
                    v-radio(value='small' label='small' color='#f97778')
                    v-divider
                    v-radio(value='medium' label='medium' color='#f97778')
                    v-divider
                    v-radio(value='large' label='large' color='#f97778')

            v-divider
            v-card-actions
                v-spacer
                //- Quantity
                v-btn(icon small @click='DecreaseQuantity()' :disabled='quantity <= minQuantity')
                    v-icon.material-icons remove_circle_outline
                input#quantityInput.text-center(v-model='quantity' min='1' max='999' :maxlength='maxLength' v-mask='"###"')
                v-btn(icon small @click='IncreaseQuantity()' :disabled='quantity >= maxQuantity')
                    v-icon.material-icons add_circle_outline

                //- Add To Cart Button
                v-btn.rounded-xl(color='#f97778' dark) {{ updateCheckoutText }}
            
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
				return `Add to cart - $${ (this.quantity * this.item.price).toFixed(2) }`;
			else return ``;
		},
	},
	data() {
		return {
			maxLength: 3,
            maxQuantity: 999,
            minQuantity: 1,
			quantity: 1,
			total: 0,
            size: 'small'
		};
	},
	methods: {
        CloseMenuCart: function()
        {
            this.total = 0;
            this.quantity = 1;
            this.$emit('update:openMenuCart', false);
        },
		AddToTotal: function(price) {
			this.total += price;
		},
		RemoveFromTotal: function(price) {
			this.total -= price;
		},
        IncreaseQuantity: function()
        {
            if(this.quantity >= 999) this.quantity = 999;
            else this.quantity++;
        },
        DecreaseQuantity: function()
        {
            if(this.quantity <= 1) this.quantity = 1;
            else this.quantity--;
        }
	},
};
</script>
<style lang="sass" scoped>
#quantityInput
    max-width: 2rem
    &:selected

    
</style>
