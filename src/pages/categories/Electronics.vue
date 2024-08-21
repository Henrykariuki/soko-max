<script setup>
import ProductCard from '@/components/ProductCard.vue';
import { ref } from 'vue';

const televisions = ref([
    {image: '/images/tvs/tcl01.jpg', text1: 'TCL 43P725 43 inch', text2: 'Android LED TV', price: '155',},
    {image: '/images/tvs/tcl02.jpg', text1: 'TCL 28P725 28 inch', text2: 'Android LED TV', price: '125',},
    {image: '/images/tvs/tcl03.jpg', text1: 'TCL 55P725 55 inch', text2: 'Android LED TV', price: '190',},
    {image: '/images/tvs/tcl04.jpg', text1: 'TCL 24D3100 24 inch', text2: 'Android LED TV', price: '104',},
    {image: '/images/tvs/tcl05.jpg', text1: 'TCL 55C635 55 inch', text2: 'Android QLED TV', price: '230',},
    {image: '/images/tvs/tcl06.jpg', text1: 'TCL 32P725 32 inch', text2: 'Android LED TV', price: '110',},
    {image: '/images/tvs/tcl07.jpg', text1: 'TCL 32D3200 32 inch', text2: 'Android LED TV', price: '107',},
    {image: '/images/tvs/tcl13.jpg', text1: 'TCL 32D2900 32 inch', text2: 'Android LED TV', price: '104',},
    {image: '/images/tvs/tcl12.jpg', text1: 'TCL 43P725 43 inch', text2: 'Android QLED TV', price: '160',},
    {image: '/images/tvs/tcl14.jpg', text1: 'TCL 43P725 43 inch', text2: 'Android LED TV', price: '158',},
    {image: '/images/tvs/tcl09.jpg', text1: 'TCL 55P725 43 inch', text2: 'Android QLED TV', price: '230',}
])
</script>
<template>
    <div class=" grid grid-cols-5 gap-4 p-4">
        <ProductCard v-for="(info, index) in televisions" :key="`id-${index}`" :item="info" />
    </div>
</template>
<style scoped>

</style>