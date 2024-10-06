<script setup>
import { Star, Heart } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

defineProps({
    product: {
        type: Object,
        required: true
    }
})


</script>
<template>
    <NuxtLink :to="`/products/${product.id}`">
        <div
            class="max-h-full border border-gray-300 rounded-lg p-2 hover:shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300">
            <div class="relative">
                <img class="rounded-md h-52 " :src="product.image">
                <div class=" absolute p-1 rounded-full flex items-center bg-gray-200 top-2 right-2">
                    <Heart size="14" />
                </div>
            </div>
            <div class=" my-2">
                <div>
                    <p class="font-medium line-clamp-2 ">{{ product.title }}</p>
                    <p class="text-gray-600 text-sm my-1 line-clamp-3 ">{{ product.description }}</p>
                    <div class="flex flex-row gap-1 items-center">
                        <Star v-for="i in 5" :key="i" size="16" />
                        <p class="text-gray-600 text-xs">(121)</p>
                    </div>
                </div>
                <div class="flex justify-between mt-4 ">
                    <div class="font-medium flex">
                        <span class="text-xs">$</span>
                        <p class="text-sm">
                            {{ product.price }}
                        </p><span class="text-xs">.04</span>
                    </div>
                    <button class="rounded-md bg-indigo-500 text-white hover:bg-indigo-600  text-xs py-1 px-2">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>
<style scoped></style>