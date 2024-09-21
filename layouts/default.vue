<script setup>
import { ShoppingCart, Search } from 'lucide-vue-next';
import { useRouter } from '#app';
import MenuItem from '~/components/MenuItem.vue'; // Nuxt uses ~/ for root path imports

const menuLinks = ref([
    { path: '/categories', title: 'Categories', children: [
        { path: '/categories/electronics', title: 'Electronics' },
        { path: '/categories/bags', title: 'Bags' },
        { path: '/categories/dresses', title: 'Dresses' },
        { path: '/categories/trousers', title: 'Trousers' },
        { path: '/categories/accessories', title: 'Accessories' }
    ] },
]);

const menuLinksTwo = ref([
    { path: '/categories/electronics', title: 'Electronics' },
    { path: '/categories/bags', title: 'Bags' },
    { path: '/categories/dresses', title: 'Dresses' },
    { path: '/categories/trousers', title: 'Trousers' },
    { path: '/categories/accessories', title: 'Accessories' },
])

const router = useRouter();

const goHome = () => {
    router.push({ name: 'home', params: { id: 'home' } });
};
</script>
<template>
    <div>
        <div class="border border-red-500 py-4 flex flex-col gap-8">
            <div class=" flex justify-between">
                <NuxtLink to="/"
                        class=" hover:bg-gray-200 transition-hover duration-100 rounded-md flex items-center cursor-pointer">
                    <img class="w-12 h-10 p-1" src="/images/sokologo.jpg" alt="SokoMax Logo">
                    <p class="font-bold text-2xl text-green-900">SokoMax</p>
                </NuxtLink>
                <div class="relative">
                    <input type="text" placeholder="Search Product"
                     class="bg-gray-100 border hover:border-indigo-500 transition-hover duration-100 px-4 py-2 w-96 border-gray-300 rounded-full">
                    <button class="rounded-full bg-white p-2 absolute right-2 top-1 text-gray-500">
                        <Search size="16"/>
                    </button> 
                </div>
                <div class=" relative flex flex-row gap-6 items-center">
                    <div class="flex flex-row gap-2">
                        <ShoppingCart />
                        <p class="font-medium">Cart</p>
                    </div>
                </div>
            </div>
            <div class=" flex flex-row gap-40 items-center">
                <div v-for="(menu, index) in menuLinks" :key="`id-${index}`"
                    class="border border-slate-300 hover:bg-gray-100 transition-hover duration-100 text-sm p-2 rounded-full">
                    <div v-if="menu.children" class="">
                        <MenuItem :item="menu" />
                    </div>
                </div>
                <div class="flex flex-row gap-4">
                    <div v-for="(m, index) in menuLinksTwo" :key="`id-${index}`" >  
                        <NuxtLink class="border border-slate-300 rounded-full hover:bg-gray-100 transition-hover duration-100 px-3 py-2" :to="m.path">
                            {{ m.title }}
                        </NuxtLink>
                    </div>
                </div >
            </div>
        </div >
        <div>
            <slot/>
        </div>
    </div>
</template>
<style scoped>

</style>
