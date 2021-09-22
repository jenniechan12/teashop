<template lang="pug">
div
    v-alert.text-center(v-model='alert' border='top' color='#f9777875' dark  dismissible) {{ alertMessage }}
</template>
<script>
export default {
    data()
    {
        return{
            alert: true,
            alertMessage: 'Welcome to TeaShop! This website is only a template for my personal project.'
        }
    }
}
</script>