<template lang="pug">
v-navigation-drawer(absolute permanent right width='20%')
	v-list.ma-4(nav, dense)
		v-list-item
			v-row(no-gutters align='center' justify='center')
				v-col(cols='6')
					v-icon.material-icons(color='#f97778') person
					v-text.ml-2 Jenny
				v-col(cols='6')
					v-icon.material-icons(color='#f97778') place
					v-text.ml-2 12345 ABC St, New York
	v-divider.mx-8
	v-list.ma-4(nav, dense)
		h3.pa-4 My Order

	v-divider.mx-8
	
	v-row(align='center' justify='center' no-gutters)
		v-col.pa-8
			v-btn(color='#f97778' dark rounded block) Submit Order



</template>
<style scoped>
.salmon {
	background-color: #f97778 !important;
}
</style>