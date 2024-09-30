<script setup>
import ProductCard from '~/components/ProductCard.vue';
import { useRoute } from 'vue-router';


const route = useRoute()
const category = route.params.id

const capitalizeCategory = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1)
}

</script>
<template>
<div>
    <p>my id: {{capitalizeCategory(category)}}</p>
    <ProductCard/>
</div>
</template>
<style scoped>
</style>