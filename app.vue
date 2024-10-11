<script setup>
import { useCart } from './composables/useCategories';

const { data, error } = await useFetch('https://fakestoreapi.com/products/categories')
const categories = useCategories()
if (data.value && !error.value) {
  categories.value = data.value
} else {
  console.error('Error fetching categories:', error.value)
}

const cartData  = await useFetch('https://fakestoreapi.com/products')
const cart = useCart()
if (cartData) {
  cart.value = cartData.value
}
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped></style>