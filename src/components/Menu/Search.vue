<template lang="pug">
v-row(align='center' justify='start')
    v-col(cols='10' sm='6') 
        v-text-field.rounded-xl(solo flat dense hide-details placeholder='Search')
            template(v-slot:prepend-inner)
                v-icon.material-icons search
    v-col(cols='2')
        v-btn(depressed rounded color='white')
            v-icon.material-icons(left color='rgba(0, 0, 0, 0.54)') tune
            v-text.text-decoration-none(color='rgba(0, 0, 0, 0.54)') Filters  
</template>
<style scoped>

</style>

