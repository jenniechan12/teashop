<template lang="pug">
div
    v-row.mt-15(align='center' justify='center' no-gutters)
        v-col(cols='10')
            h1 Location &amp Hours
            v-row.ma-6(align='center' justify='center')
                v-col(cols='12' sm='3')
                    div
                        v-icon.material-icons.mr-2(color='#f97778' style='float: left') place
                        h3 Address
                    .subtitle-2 {{ location.address }}
                    .subtitle-2 {{ `${location.city}, ${location.state}, ${location.zipcode}`}}
                v-col(cols='12' sm='3')
                    v-icon.material-icons.mr-2(color='#f97778' style='float: left') schedule
                    h3 Hours
                    .subtitle-2 Mon - Thurs 11:00AM - 10:00PM
                    .subtitle-2 Fri - Sun 12:00PM - 9:00PM
                v-col(cols='12' sm='3')
                    v-icon.material-icons.mr-2(color='#f97778' style='float: left') import_contacts
                    h3 Contact
                    .subtitle-2 Phone {{ phone }}
                    .subtitle-2 Email teashop@leaf.net
</template>
<script>
export default {
	data() {
		return {
			location: {
				place: 'TeaShop',
				address: '123 Earl Tea St.',
				city: 'Leafville',
				state: 'Tea Village',
				zipcode: '96385',
			},
			phone: '(123) 456 - 7890',
			hours: [
				{ day: 'Monday', hours: '11:00AM - 9:00PM' },
				{ day: 'Tuesday', hours: '11:00AM - 9:00PM' },
				{ day: 'Wednesday', hours: '11:00AM - 9:00PM' },
				{ day: 'Thursday', hours: '11:00AM - 9:00PM' },
				{ day: 'Friday', hours: '11:00AM - 9:00PM' },
				{ day: 'Saturday', hours: '11:00AM - 9:00PM' },
				{ day: 'Sunday', hours: '11:00AM - 9:00PM' },
			],
		};
	},
    methods: 
    {
        HoursFormat: function(item){
            return `${item.day} - ${item.hours}`
        }
    }
};
</script>
