<template lang="pug">
    
</template>
<script>
export default {
	props: {
		cart: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	data() {
		return {
            total: 0
        };
	},
	methods: {
		// Add to Orders to DB
		SubmitCart: function() 
        {
            let mins = 30 * 60 * 1000;  // 30 mins converted into miliseconds
            let timeStamp = new Date();
            let order = 
            {
                cart: this.cart,
                orderSubmitted: timeStamp,
                orderCompleted: new Date().setTime(timeStamp.getTime() + mins),
                total: this.total
            };

            this.$socket.client.emit('AddOrder', order);
        },

		// Remove Order from Cart
        RemoveOrderFromCart: function(index)
        {
            this.cart.splice(index, 1);
        },

		// Increase / Decrease Quantity
		IncreaseQuantity: function(index) {
			if (this.cart.length > 0 && this.cart.length > index) {
				if (this.cart[index].quanity < 999) {
					this.cart[index].quantity++;
				}
			}
		},

		DecreaseQuantity: function(index) {
			if (this.cart.length > 0 && this.cart.length > index) {
				if (this.cart[index].quantity > 0) {
					this.cart[index].quanity--;
				}
			}
		},
	},
};
</script>
