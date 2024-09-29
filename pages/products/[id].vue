<script>



const {id} = useRoute().params



</script>
<template>
<div>
    <p>my id{{ id }}</p>
    <div>
        <slot/>
    </div>
</div>
</template>
<style scoped>
</style>