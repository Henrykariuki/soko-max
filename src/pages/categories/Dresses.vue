<script setup>
import ProductCard from '@/components/ProductCard.vue';
import { ref } from 'vue';


const dresses = ref([
    {image: '/images/dresses/dress01.jpg', text1: 'Moonetto Women\'s Wrap ', text2: 'Dress Short Sleeve', price: '20',},
    {image: '/images/dresses/dress02.jpg', text1: 'Fashion Crew Neck ', text2: 'Lace Dovetail ', price: '15',},
    {image: '/images/dresses/dress03.jpg', text1: 'Cocktail dress ', text2: 'Dress Swing Dress Midi', price: '190',},
    {image: '/images/dresses/dress04.jpg', text1: 'Bodycon Sequin', text2: 'Evening Dresses', price: '104',},
    {image: '/images/dresses/dress05.jpg', text1: 'Smileven Black Mini Prom Gowns', text2: 'Evening Dresses', price: '230',},
    {image: '/images/dresses/dress06.jpg', text1: 'Irregular Party Dress', text2: 'Dress Long Sleeve', price: '110',},
    
])
    
</script>
<template>
    <div class=" grid grid-cols-5 gap-4 p-4">
        <ProductCard v-for="(info, index) in dresses" :key="`id-${index}`" :item="info"/>
    </div>
</template>
<style>
</style>