<template lang="pug">
v-row(align='center' justify='center' no-gutters)
    v-col(cols='12' sm='8')
        //- Payment Methods
        v-card.my-6.rounded-xl(flat)
            v-card-title Payment Methods
            v-card-text
                span Saved Payment methods
                v-list(two-lines)
                    template(v-for='(item,index) in paymentOptions')
                        v-list-item(:key='item.card')
                            v-list-item-avatar
                                v-icon.material-icons credit_card 
                            v-list-item-content
                                v-list-item-title {{ CardFormatText(item)}}
                                v-list-item-subtitle {{ CardExpirationText(item.expire )}}
                            v-list-item-action
                                v-chip(v-if='selectedPayment.card === item.card' label small color='#f97778' dark)
                                    v-icon.material-icons(left) check 
                                    span Default
                            v-list-item-action
                                v-menu(offset-x)
                                    template(v-slot:activator='{ on }')
                                        v-btn(icon v-on='on')
                                            v-icon.material-icons more_horiz 
                                    v-list
                                        v-list-item(@click='SetDefaultPayment(index)')
                                            v-list-item-title Set Default
                                        v-list-item(@click='DeleteCard(index)')
                                            v-list-item-title Delete
                        v-divider
    
        //- Add New Payment
        v-card.rounded-xl(flat)
            v-card-title Add New Payment Method 
            v-card-text
                v-list
                    v-list-item(v-for='item in addNewPaymentOptions' :key='item.text' @click='item.action')
                        v-list-item-avatar
                            v-icon.material-icons {{ item.logo }}
                        v-list-item-content
                            v-list-item-title {{ item.text }}
                        v-list-item-action
                            v-icon.material-icons navigate_next
    
    //- Add New Payment Dialog
    AddCard(:openAddCard.sync='openAddCard')

</template>
<script>
import AddCard from './AddCard';
import { mapGetters } from 'vuex';

export default {
	components: {
		AddCard,
	},
	props: {
		openPaymentView: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapGetters({
			paymentOptions: 'getCurrentPayments',
			selectedPayment: 'getSelectedPayment',
		}),
	},
	data() {
		return {
			addNewPaymentOptions: [
				{
					logo: 'credit_card',
					text: 'Credit/Debit Card',
					action: this.OpenAddCard,
				},
				{ logo: 'paypal', text: 'Paypal', action: this.DoNothing },
			],
			openAddCard: false,
		};
	},
	methods: {
		CardFormatText: function(card) {
			let cardNumber = card.card;
			let cardNumberLength = cardNumber.length;
			let last4Digits = card.card.slice(cardNumberLength - 4);
			return `${card.type}...${last4Digits}`;
		},
		CardExpirationText: function(date) {
			return `Exp. ${date}`;
		},
		OpenAddCard: function() {
			this.openAddCard = true;
		},
		SetDefaultPayment: function(index) {
			this.$store.commit('updateSelectedPayment', this.paymentOptions[index]);
		},
		DeleteCard: function(index) {
			this.paymentOptions.splice(index, 1);
			this.$store.commit('updateCurrentPayments', this.paymentOptions);
		},
		DoNothing: function() {},
	},
};
</script>
