<template lang="pug">
v-row(align='center' justify='center' no-gutters)
    v-col(cols='12')
        //- Payment Methods
        v-card.mx-auto.my-6(width='60%')
            v-card-title Payment Methods
            v-card-text
                span Saved Payment methods
                v-list(two-lines)
                    template(v-for='item in paymentDefaultOptions')
                        v-list-item(:key='item.card')
                            v-list-item-avatar
                                v-icon.material-icons credit_card 
                            v-list-item-content
                                v-list-item-title {{ CardFormatText(item)}}
                                v-list-item-subtitle {{ CardExpirationText(item.expire )}}
                            v-list-item-action
                                v-btn(icon)
                                    v-icon.material-icons more_horiz 
                        v-divider
    
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
            paymentDefaultOptions: [
                { type: 'Discover', card: '0123456789012345', expire: '01/23'},
                { type: 'American Express', card:'9876543210987654', expire: '12/34'},
                { type: 'Visa', card: '0147852369014725', expire: '02/25'}
            ],
			addNewPaymentOptions: [
				{ logo: 'credit_card', text: 'Credit/Debit Card' },
				{ logo: 'paypal', text: 'Paypal' },
			],
		};
	},
    methods: 
    {
        CardFormatText: function(card) {
            let cardNumber = card.card;
            let cardNumberLength = cardNumber.length;
            let last4Digits = card.card.slice(cardNumberLength-4);
            return `${card.type}...${last4Digits}`;
        },
        CardExpirationText: function(date) {
            return `Exp. ${date}`
        }
    }
};
</script>
