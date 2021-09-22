<template lang="pug">
div
    v-row.fullPage(align='center' justify='center' no-gutters)
        v-col(cols='12' sm='3' offset-sm='1')
            div#teashopFont.font-weight-black.my-4 TeaShop
            h3.mb-4 Simply made fresh daily. Blah blah blah blah  blah filler
            v-btn(depressed dark x-large @click='OpenMenu()') Order Online
        v-col(cols='12' sm='7' offset-sm='1' order='first' order-sm='last')
            v-img(src='../../../public/boba_background.png')
    AboutUs
    Contact
</template>
<script>
import AboutUs from './AboutUs'
import Contact from './Contact';

export default {
    name: 'HomePage',
    components:
    {
        AboutUs,
        Contact
    },
    data()
    {
        return{
        }
    },
    methods: {
        OpenMenu: function()
        {
            this.$store.commit('updateCurrentPage', "Menu");
        }
    }
}
</script>
<style scoped>
.fullPage{
    height: 100vh;
}
#teashopFont{
    font-size: 2.5em;
    font-size: 4vw;
}
</style>