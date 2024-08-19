<script setup>
import { ShoppingCart, Search } from 'lucide-vue-next';
import { routes } from '@/main';
import { ref } from 'vue';
import MenuItem from './MenuItem.vue';


const menuLinks =ref(routes)

</script>

<template>
  <div class="border border-black flex justify-between">
    <div class="border border-black flex items-center">
      <img class="w-14 h-14" src="/images/sokologo.jpg">
      <p class="font-bold text-2xl text-green-900">SokoMax</p> 
    </div>
    <div  class="border border-black flex flex-row gap-2 items-center">
      <div v-for="(menu, index) in menuLinks" :key="`id-${index}`" class="hover:bg-gray-50 text-sm border border-black p-2 rounded-md">
        <div v-if="menu.children" >
          <P>{{ menu.title }}</P>
          <div v-for="(child, childIndex) in menu.children" :key="`child-${childIndex}`">
            <MenuItem :item="child"/>
          </div>
        </div>
        <MenuItem v-else :item="menu" />
      </div>
    </div>
    <div class="border border-black relative flex flex-row gap-6 items-center">
      <input type="text" placeholder="Search Product" class="border px-4 py-2 w-72  border-gray-300 rounded-full">
      <div class="flex flex-row gap-2">
        <ShoppingCart/>
        <p class="font-medium">Cart</p>
      </div>
      <button class="absolute right-24 text-gray-500"><Search size="16"/></button>
    </div>
  </div>
</template>

<style scoped>

</style>
