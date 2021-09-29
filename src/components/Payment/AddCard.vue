<template lang="pug">
v-dialog(v-model='openAddCard' persistent :fullscreen='$vuetify.breakpoint.smAndDown' max-width='600px')
	v-card(flat)
		v-toolbar.salmon(flat dark)
			v-btn(icon @click='CloseAddCard()')
				v-icon.material-icons close
			v-toolbar-title Add New Payment
		v-card-text.py-5
			v-form(ref='paymentForm' v-model='validForm' lazy-validation)
				v-container
					v-row(align='center' justify='center')
						v-col(cols='12')
							//- Card Number
							v-text-field.rounded-md( v-model='card'
								outlined, flat, dense,  required
								label='Card Number', placeholder='xxxx xxxx xxxx xxxx',
								color='#f9777875' v-mask='"#### #### #### ####"' :rules='cardRules'
							)
								template(v-slot:prepend-inner)
									v-icon.material-icons credit_card
						//- Expire
						v-col(cols='6')
							v-text-field.rounded-md( v-model='expire'
								outlined, flat, dense, required,
								label='Expiration Date', placeholder='xx/xx',
								color='#f9777875' v-mask='"##/####"' :rules='expireRules'
							)
						v-col(cols='6')
							v-text-field.rounded-md( v-model='cvv'
								outlined, flat, dense,  required
								label='CVV', placeholder='xxx'
								color='#f9777875' v-mask='"###"' :rules='cvvRules'
							)

		v-divider.mx-4
		v-card-actions
			v-row.ma-4(align='center', justify='center', no-gutters)
				v-col(cols='12')
					v-btn.mr-8(depressed, dark, color='#f97778' @click='Clear()') Clear
					v-btn(depressed, :dark='validForm', color='#f97778' :disabled='!validForm' @click='AddNewPayment()') Submit	


</template>
<script>
import { mapGetters } from 'vuex';

export default {
	props: {
		openAddCard: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapGetters({ currentPayments: 'getCurrentPayments' }),
	},
	data() {
		return {
			type: 'Visa',
			card: '',
			expire: '',
			cvv: '',
			validForm: false,
			cardRules: [
				(v) => (v && v != '') || 'Required.',
				(v) => (v && v.length === 19) || 'Invalid card.',
			],
			expireRules: [
				(v) => (v && v != '') || 'Required',
				(v) =>
					(v &&
						parseInt(v.substring(0, 2)) >= 1 &&
						parseInt(v.substring(0, 2)) <= 12) ||
					'Invalid date.',
				(v) =>
					(v &&
						((parseInt(v.substring(0, 2)) >= new Date().getMonth() + 1 &&
							parseInt(v.substring(3, 7)) == new Date().getFullYear()) ||
							parseInt(v.substring(3, 7)) > new Date().getFullYear())) ||
					'Card is expired.',
			],
			cvvRules: [
				(v) => (v && v != '') || 'Required',
				(v) => (v && v.length === 3) || 'Invalid CVV.',
			],
		};
	},
	methods: {
		Clear: function() {
			this.$refs.paymentForm.reset();
			this.type = 'Visa';
			this.card = '';
			this.expire = '';
			this.cvv = '';
		},
		CloseAddCard: function() {
			this.Clear();
			this.$emit('update:openAddCard', false);
		},
		AddNewPayment: function() {
			this.$refs.paymentForm.validate();
			if (this.validForm) {
				let card = {
					type: this.type,
					card: this.card,
					expire: this.expire,
					cvv: this.cvv,
				};
				console.log(card);
				this.currentPayments.push(card);
				this.$store.commit('updateCurrentPayments', this.currentPayments);
				this.CloseAddCard();
			}
		},
	},
};
</script>
