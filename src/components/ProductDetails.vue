<script setup>
import { Star} from 'lucide-vue-next';

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
        <div class=" border border-black">
            <div class="border border-black flex flex-col gap-2 py-4">
                <div>
                    <p class="font-bold text-xl">Tote Bags</p>
                </div>
                <div>
                    <p class="text-gray-600">The Tan Kodiak Tote is a classic leather tote bag handmade in the USA with heirloom-quality craftsmanship and the very best materials. Tan Kodiak is an iconic KMM & Co. leather with a pebbled grain and lots of character. The Tan Kodiak Tote comes standard with Tan handles.</p>
                </div>
                <div class="flex items-center">
                    <div v-for="(star, index) in ratings" :key="`id-${index}`">
                        <component :is="star.icon" size="12"/>
                    </div>
                    <p class="text-gray-600 text-xs">(121)</p>
                </div>
            </div>
            <div class="border border-black">
                <div >
                    <p class="font-semibold text-lg">Ksh 1,800</p>
                </div>
            </div>
            <div class="border border-black"></div>
            <div class="border border-black"></div>
        </div>
    </div>
</template>
<style>
</style>