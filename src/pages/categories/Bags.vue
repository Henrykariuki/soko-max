<script setup>
import ProductCard from '@/components/ProductCard.vue';
import { ref } from 'vue';

const bags = ref([
    {image: '/images/bags/wbag01.jpg', text1: 'Sleek Evil Eye', text2: 'Companion Pouch', price: '20',},
    {image: '/images/bags/wbag02.jpg', text1: 'Fashion Women Bags', text2: 'Purse Sling Bags', price: '15',},
    {image: '/images/bags/wbag03.jpg', text1: 'Black Handbags', text2: 'Shoulder Messenger Bags', price: '190',},
    {image: '/images/bags/wbag04.jpg', text1: 'Sling Bag Black', text2: 'Sling Bag | Nestasia', price: '104',},
    {image: '/images/bags/wbag05.jpg', text1: 'Canvas Tote Bag', text2: 'Signature Rope Handle', price: '230',},
    {image: '/images/bags/wbag06.jpg', text1: 'Pink Handbags', text2: 'Miniso Pakistan', price: '110',},
    {image: '/images/bags/wbag07.jpg', text1: 'Fashion Handbags', text2: 'Shoulder Messenger Bags', price: '107',},
    {image: '/images/bags/wbag08.jpg', text1: 'Guess Ruma', text2: 'Bag in Natural | Lyst', price: '104',},
    {image: '/images/bags/wbag09.jpg', text1: 'Carryall Canvas Tote', text2: 'Bag Mint Large', price: '160',},
    {image: '/images/bags/wbag10.jpg', text1: 'Leather Crossbody Bag', text2: 'Pinkpops', price: '158',},
    {image: '/images/bags/wbag11.jpg', text1: 'PU Leather', text2: 'Lovely Baby Girls', price: '230',}
])
</script>
<template>
    <div class=" grid grid-cols-5 gap-4 p-4">
        <ProductCard v-for="(info, index) in bags" :key="`id-${index}`" :item="info"/>
    </div>
</template>
<style scoped>

</style>