<script setup>
import { Star, Minus, Plus} from 'lucide-vue-next';
import { ref } from 'vue';
const photos = [
    {image: '/images/dresses/dress07.jpg'},
    {image: '/images/dresses/dress07.jpg'},
    {image: '/images/dresses/dress07.jpg'},
    {image: '/images/dresses/dress07.jpg'}
]

const ratings = [
    {icon: Star},
    {icon: Star},
    {icon: Star},
    {icon: Star},
    {icon: Star}
]

const buttons = [
    {name: 'Review'},
    {name: 'FAQs'},
    {name: 'Shipping'},
    {name: 'Return Policy'},
    {name: 'Warranty'}
]

const activeIndex = ref(null);
</script>
<template>
    <div class="grid grid-cols-2">
        <div class=" border border-black flex flex-col items-center gap-4">
            <div>
                <img class="w-96 h-96 object-cover rounded-md" src="/images/dresses/dress07.jpg">
            </div>
            <div class="flex flex-row gap-4">
                <div v-for="(content, index) in photos" :key="`id-${index}`">
                    <img class="w-20 h-20 object-cover rounded-md " :src="content.image">
                </div>  
            </div>
        </div>
        <div class=" ">
            <div class="border-b border-slate-200 flex flex-col gap-2 py-4">
                <div>
                    <p class="font-bold text-xl">Tote Bags</p>
                </div>
                <div>
                    <p class="text-gray-600">The Tan Kodiak Tote is a classic leather tote bag handmade in the USA with heirloom-quality craftsmanship and the very best materials. Tan Kodiak is an iconic KMM & Co. leather with a pebbled grain and lots of character. The Tan Kodiak Tote comes standard with Tan handles.</p>
                </div>
                <div class="flex items-center">
                    <div v-for="(star, index) in ratings" :key="index">
                        <component :is="star.icon" size="12"/>
                    </div>
                    <p class="text-gray-600 text-xs">(121)</p>
                </div>
            </div>
            <div class="border-b border-slate-200 py-8">
                <div >
                    <p class="font-semibold text-lg">Ksh 1,800</p>
                </div>
            </div>
            <div class="border-b border-slate-200 py-8 flex items-center justify-between py-2">
                <div class="flex items-center bg-gray-100 px-1 py-2 rounded-full">
                    <button class=" py-1 px-3"><Minus size="16"/></button>
                    <div class=" px-14">1</div>
                    <button class=" py-1 px-3"><Plus size="16"/></button>
                </div>
                <button class=" bg-green-400 hover:bg-green-500  rounded-full px-20 py-2">
                    <p class="text-white">Add to Cart</p>
                </button>
            </div>
            <div class="border-b border-slate-200 flex items-end h-24 ">
                <div v-for="(info, index) in buttons" :key="`id-${index}`"    
                 :class="activeIndex === index ? 'px-4 py-2 border-b border-green-600 text-green-600' : 'px-4 py-2 border-b border-slate-200 text-gray-600'"
                 @click="activeIndex = index">
                    <p>{{ info.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
</style>