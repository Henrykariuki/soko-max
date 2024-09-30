<script setup>
import {Star, Heart } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const products = ref([]);
const isLoading = ref(true);

const category = route.params.id;

const fetchProductByCategory = async () => {
    isLoading.value = true
    try {
       const {data} =  await useFetch(`https://fakestoreapi.com/products/category/${category}`)
       products.value = data.value
    } catch (error) {
        console.error("Failed to fetch products:", error)
    } finally {
        isLoading.value = false
    }
}


onMounted(() => {
  fetchProductByCategory();
});


</script>
<template>
    <div>
        <div v-if="isLoading">
            <p>Loading products...</p>
        </div>
        <div v-else>
            <div v-if="products.length > 0">
                <div class=" grid grid-cols-5 gap-4 p-4">
                    <div v-for="product in products" :key="product"
                     class="max-h-full border border-gray-300 rounded-lg p-4 hover:shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300">
                        <div class="relative">
                            <img class="rounded-md h-52" :src="product.image">
                            <div class=" absolute p-1 rounded-full flex items-center bg-gray-200 top-2 right-2">
                                <Heart size="14"/>
                            </div>
                        </div>
                        <div class="flex justify-between my-2">
                            <div>
                                <p class="font-medium line-clamp-2 ">{{ product.title }}</p>
                                <p class="text-gray-600 text-sm my-1 line-clamp-3 ">{{ product.description}}</p>
                                <div class="flex flex-row gap-1 items-center">
                                    <Star v-for="i in 5" :key="i" size="16" />
                                    <p class="text-gray-600 text-xs">(121)</p>
                                </div>
                            </div>
                            <div >
                                <div class="font-medium flex">
                                    <span class="text-xs">$</span><p class="text-sm">{{ product.price }}</p><span class="text-xs">.04</span>
                                </div>
                            </div>
                        </div>
                        <button class="rounded-full hover:bg-gray-200 border border-black text-xs py-1 px-2">
                            Add to Cart
                        </button>
                    </div >
                </div>
            </div>
            <div v-else>
                <p>No products found for this category.</p>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>