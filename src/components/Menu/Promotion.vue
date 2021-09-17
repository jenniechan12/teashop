<template lang="pug">
v-row(align="center", justify="start")
	v-col(cols="12", sm="10")
		v-card(flat)
			v-list-item
				v-list-item-avatar
					v-icon.material-icons(size="64") coffee
				v-list-item-content
					v-list-item-title Get milk tea FOR FREE
					v-list-item-subtitle Buy one milk tea, get one free for you or a friend.
			v-card-actions
				v-spacer
				v-btn(text)
					v-text.text-decoration-none Learn more
					v-icon.material-icons(right, small) arrow_right_alt
	v-col.pl-8(cols="12")
		h2 Tea Shop
		subtitle-2 Select category you'd like to drink from
	v-col.my-2.pl-6
		v-chip.ma-2(v-for="item in categories" :key='item' color='white') {{ item }}
</template>
<script>
export default {
	data() {
		return {
            categories:["Milk Tea", "Fruit Tea", "Coffee", "Misc"]
        };
	},
};
</script>
