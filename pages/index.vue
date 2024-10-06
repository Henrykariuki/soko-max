<script setup>
const { data: products } = await useFetch('https://fakestoreapi.com/products');

</script>
<template>
    <div>
        <h1 class="font-bold text-3xl pl-4">Products</h1>
    </div>
    <div class="grid grid-cols-2 gap-4 md:grid md:grid-cols-5 md:gap-4 md:p-4">
        <ProductCard v-for="product in products" :key="product" :product="product" />
    </div>
</template>
<style scoped>

</style>