<template lang="pug">
v-row(align='center' justify='center' no-gutters)
    v-col(cols='12')
        v-card.mx-auto.my-6.rounded-xl(width='60%' flat)
            v-card-title Orders 
            v-divider
            v-card-text(v-if='currentOrders.length > 0') 
                span <b>Current Orders</b>
            v-divider(v-if='currentOrders.length > 0')
            v-card-text 
                span <b>Previous Orders</b>
                v-list.px-6(three-list)
                    template(v-for='(item,index) in previousOrders')
                        v-list-item(:key='index')
                            v-list-item-content
                                v-list-item-title {{ item.restaurant }}
                                v-list-item-subtitle {{ DeliveryDateFormat(item.deliveredDate) }}
                                v-list-item-subtitle {{ ItemsFormat(item.items) }}
                            v-list-item-action
                                v-btn.rounded-xl(depressed dark color='blue-grey lighten-4') View Order
                        v-divider
</template>
<script>
export default {
	data() {
		return {
            currentOrders: [],
			previousOrders: [
				{
					restaurant: 'TeaShop',
					deliveredDate: '08/01/2019, 12:29PM',
					total: 4.5,
					items: ['Almond Milk Tea'],
				},
				{
					restaurant: 'TeaShop',
					deliveredDate: '08/01/2019, 12:29PM',
					total: 4.5,
					items: ['Almond Milk Tea'],
				},
				{
					restaurant: 'TeaShop',
					deliveredDate: '08/01/2019, 12:29PM',
					total: 4.5,
					items: ['Almond Milk Tea'],
				},
				{
					restaurant: 'TeaShop',
					deliveredDate: '08/01/2019, 12:29PM',
					total: 4.5,
					items: ['Almond Milk Tea'],
				},
				{
					restaurant: 'TeaShop',
					deliveredDate: '08/01/2019, 12:29PM',
					total: 4.5,
					items: ['Almond Milk Tea'],
				},
				{
					restaurant: 'TeaShop',
					deliveredDate: '08/01/2019, 12:29PM',
					total: 4.5,
					items: ['Almond Milk Tea'],
				},
				{
					restaurant: 'TeaShop',
					deliveredDate: '08/01/2019, 12:29PM',
					total: 4.5,
					items: ['Almond Milk Tea'],
				},
			],
		};
	},
    methods: 
    {
        DeliveryDateFormat: function(date){
            return `Delivered: ${date}`;
        },
        ItemsFormat: function(items)
        {
            return items.join(', ');
        }
    }
};
</script>
