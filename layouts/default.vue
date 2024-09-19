<script setup>
import { ShoppingCart, Search } from 'lucide-vue-next';
import { useRouter } from '#app';
import MenuItem from '~/components/MenuItem.vue'; // Nuxt uses ~/ for root path imports

const menuLinks = ref([
    { path: '/categories', title: 'Categories', children: [
        { path: '/categories/electronics', title: 'Electronics' },
        { path: '/categories/bags', title: 'Bags' },
        { path: '/categories/dresses', title: 'Dresses' },
        { path: '/categories/Trousers', title: 'Trousers' },
        { path: '/categories/accessories', title: 'Accessories' }
    ] },
    { path: '/deals', title: 'Deals' },
    { path: '/whatsnew', title: 'Whats\'s New' },
    { path: '/delivery', title: 'Delivery' },
    
]);

const router = useRouter();

const goHome = () => {
    router.push({ name: 'home', params: { id: 'home' } });
};
</script>
<template>
    <div>
        <div class="border border-black flex justify-between">
            <NuxtLink to="/"
                class="border border-black hover:bg-gray-200 transition-hover duration-100 rounded-md flex items-center cursor-pointer">
            <img class="w-12 h-10 p-1" src="/images/sokologo.jpg" alt="SokoMax Logo">
            <p class="font-bold text-2xl text-green-900">SokoMax</p>
            </NuxtLink>
            <div class="border border-black flex flex-row gap-2 items-center">
            <div v-for="(menu, index) in menuLinks" :key="`id-${index}`"
                class="hover:bg-gray-100 transition-hover duration-100 text-sm p-2 rounded-md">
                <div v-if="menu.children">
                <MenuItem :item="menu" />
                </div>
                <MenuItem v-else :item="menu" />
            </div>
            </div>
            <div class="border border-black relative flex flex-row gap-6 items-center">
            <input type="text" placeholder="Search Product"
                    class="border hover:border-indigo-500 transition-hover duration-100 px-4 py-2 w-72 border-gray-300 rounded-full">
            <div class="flex flex-row gap-2">
                <ShoppingCart />
                <p class="font-medium">Cart</p>
            </div>
            <button class="absolute right-24 text-gray-500">
                <Search size="16"/>
            </button>
            </div>
        </div>
        <div>
            <slot/>
        </div>
    </div>
</template>
<style scoped>

</style>
