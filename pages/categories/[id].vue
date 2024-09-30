<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

// Reference to store products
const products = ref([]);
const isLoading = ref(true);
const route = useRoute();

// Get the category from the dynamic route
const category = route.params.id;

// Fetch products from the Fake Store API based on the category
const fetchProductsByCategory = async () => {
  isLoading.value = true;
  try {
    const { data } = await useFetch(`https://fakestoreapi.com/products/category/${category}`);
    products.value = data.value;
  } catch (error) {
    console.error("Failed to fetch products:", error);
  } finally {
    isLoading.value = false;
  }
};

// Fetch products when the component is mounted
onMounted(() => {
  fetchProductsByCategory();
});
</script>

<template>
  <div>
    <!-- Loading State -->
    <div v-if="isLoading">
      <p>Loading products...</p>
    </div>

    <!-- Products List -->
    <div v-else>
      <h1 class="text-2xl font-bold mb-4">Products in {{ category }}</h1>
      <div v-if="products.length > 0">
        <div v-for="product in products" :key="product.id" class="border border-gray-200 p-4 rounded-lg mb-4">
          <img :src="product.image" alt="Product Image" class="w-24 h-24 object-cover" />
          <h2 class="font-semibold">{{ product.title }}</h2>
          <p>{{ product.description }}</p>
          <p class="font-bold">${{ product.price }}</p>
        </div>
      </div>
      <div v-else>
        <p>No products found for this category.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add styles as needed */
</style>
