<script setup>
import ProductCard from '~/components/ProductCard.vue';
import { useRoute } from 'vue-router';


const route = useRoute()
const category = route.params.id

const capitalizeCategory = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1)
}
const { data, error, status } = await useFetch(`https://fakestoreapi.com/products/category/${category}`)
</script>
<template>
  <div class="md:flex md:flex-col md:gap-4 md:w-10/12 md:mx-auto">
    <h1 class="text-2xl font-bold">{{capitalizeCategory(category)}}</h1>
    <pre>{{ status }}</pre>
    <div class="grid grid-cols-2 gap-4 md:grid md:grid-cols-5 md:gap-4 md:p-4">
      <ProductCard v-for="product in data" :key="product" :product="product" />
    </div>
  </div>
</template>
<style scoped>
</style>