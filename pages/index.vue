<script setup>
import {Star, Heart } from 'lucide-vue-next';
const { data: products } = await useFetch('https://fakestoreapi.com/products');

</script>
<template>
<div class="p-4">
    <BreadCrumb/>
</div>
<div class=" grid grid-cols-5 gap-4 p-4">
    <div v-for="product in products"
        class="border border-gray-300 max-h-full rounded-lg p-4 hover:shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300">
        <div class="relative">
            <img class="rounded-md h-52" :src="product.image">
            <div class=" absolute p-1 rounded-full flex items-center bg-gray-200 top-2 right-2">
                <Heart size="14"/>
            </div>
        </div>
        <div class="flex justify-between my-2">
            <div>
                <p class="font-medium line-clamp-2 ">{{ product.title }}</p>
                <p class="text-gray-600 line-clamp-3 text-sm my-1">{{ product.description }}</p>
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
    </div>
</div>
</template>
<style scoped>

</style>