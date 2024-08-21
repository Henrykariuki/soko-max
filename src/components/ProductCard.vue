<script setup>
import { Star, Heart } from 'lucide-vue-next';

defineProps({
    item: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="border border-gray-300 rounded-lg p-4 hover:shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300">
        <div class="relative">
            <img class="rounded-md" :src="item.image">
            <div class=" absolute p-1 rounded-full flex items-center bg-gray-200 top-2 right-2">
                <Heart size="14"/>
            </div>
        </div>
        <div class="flex justify-between my-2">
            <div>
                <p class="font-medium ">{{ item.title1 }}</p>
                <p class="text-gray-600 text-sm my-1">{{ item.title2 }}</p>
                <div class="flex flex-row gap-1 items-center">
                    <Star size="12"/>
                    <Star size="12"/>
                    <Star size="12"/>
                    <Star size="12"/>
                    <Star size="12"/>
                    <p class="text-gray-600 text-xs">(121)</p>
                </div>
            </div>
            <div >
                <div class="font-medium flex">
                    <span class="text-xs">$</span><p class="text-sm">{{ item.price }}</p><span class="text-xs">.04</span>
                </div>
            </div>
        </div>
        <button class="rounded-full hover:bg-gray-200 border border-black text-xs py-1 px-2">
            Add to Cart
        </button>
    </div>
</template>
<style scoped>

</style>