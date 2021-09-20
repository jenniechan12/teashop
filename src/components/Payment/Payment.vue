<template lang="pug">
v-row(align='center' justify='center' no-gutters)
    v-col(cols='12')
        //- Payment Methods
        v-card.mx-auto.my-6(width='60%')
            v-card-title Payment Methods
            v-card-text
                span Saved Payment methods
                v-list-item(two-lines) 
                    v-list-item-title Discover...1234
                    v-list-item-subtitle Exp. 01/23
                v-divider
                v-list-item(two-lines) 
                    v-list-item-title Discover...1234
                    v-list-item-subtitle Exp. 01/23
        
        //- Add New Payment
        v-card.mx-auto(width='60%')
            v-card-title Add New Payment Method 
            v-card-text
                v-list
                    v-list-item(v-for='item in addNewPaymentOptions' :key='item.text' @click='')
                        v-list-item-avatar
                            v-icon.material-icons {{ item.logo }}
                        v-list-item-content
                            v-list-item-title {{ item.text }}
                        v-list-item-action
                            v-icon.material-icons navigate_next

</template>
<script>
export default {
	props: {
		openPaymentView: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			addNewPaymentOptions: [
				{ logo: 'credit_card', text: 'Credit/Debit Card' },
				{ logo: 'paypal', text: 'Paypal' },
			],
		};
	},
};
</script>
