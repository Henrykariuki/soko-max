<script setup>
import {Star, Heart } from 'lucide-vue-next';
const { data: products } = await useFetch('https://fakestoreapi.com/products');

</script>
<template>
<div class="p-4">
    <BreadCrumb/>
</div>
<div class=" grid grid-cols-5 gap-4 p-4">
    <ProductCard v-for="product in products" :key="product" :product="product"/>
</div>
</template>
<style scoped>

</style>