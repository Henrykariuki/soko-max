<script setup>
import { ShoppingCart } from 'lucide-vue-next';
import { ref } from 'vue';


const headerButtons =ref([
  {name: 'Category'},
  {name: 'Deals'},
  {name: 'Whats\'s new'},
  {name: 'Delivery'},
])

</script>

<template>
  <div class="border border-black flex justify-between">
    <div class="border border-black flex">
      <img class="w-14 h-14" src="/images/sokologo.jpg">
      <p class="font-bold text-2xl text-green-900">SokoMax</p>
    </div>
    <div  class="border border-black flex flex-row gap-2 items-center">
      <div v-for="(info, index) in headerButtons" :key="`id-${index}`" class="hover:bg-gray-50 text-sm border border-black p-2 rounded-md">
        {{ info.name }}
      </div>
    </div>
    <div class="border border-black flex items-center">
      <input type="text" class="border border-gray-300 rounded-full">
      <ShoppingCart/>
    </div>
  </div>
</template>

<style scoped>

</style>
