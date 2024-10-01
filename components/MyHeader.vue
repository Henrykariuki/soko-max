<script setup>
import { ShoppingCart, Search } from 'lucide-vue-next';
import { useRouter } from '#app';
import { ChevronDown, ChevronUp } from 'lucide-vue-next';




const router = useRouter();

const goHome = () => {
    router.push({ name: 'home', params: { id: 'home' } });
};

const categories = useCategories()


const isExpanded = ref(false);

const toggleCategories = () => {
    isExpanded.value = !isExpanded.value;
};

const capitalizeCategory = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1)
}
</script>
<template>
    <div>
        <div class="py-5 flex flex-col gap-8">
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
                        <Search size="16" />
                    </button>
                </div>
                <div class=" relative flex flex-row gap-6 items-center">
                    <div class="flex flex-row gap-2">
                        <ShoppingCart />
                        <p class="font-medium">Cart</p>
                    </div>
                </div>
            </div>
            <div class=" flex flex-row gap-40">
                <div @click="toggleCategories"
                    class="flex flex-row gap-14 relative border border-slate-300 p-2 rounded-full items-center cursor-pointer">
                    <p class="font-semibold">Categories</p>
                    <ChevronUp v-if="!isExpanded" size="15" />
                    <ChevronDown v-else size="15" />
                </div>
                <Transition name="fade">
                    <div v-if="isExpanded"
                        class="absolute top-28 mt-6 py-4 pl-4 pr-6 leading-8 z-50 bg-white shadow-lg border rounded-md">
                        <div v-for="category in categories" :key="categories">
                            <NuxtLink :to="`/categories/${category}`">
                                {{ capitalizeCategory(category) }}
                            </NuxtLink>
                        </div>
                    </div>
                </Transition>
                <div class="flex flex-row gap-2">
                    <div v-for="category in categories" :key="category">
                        <NuxtLink :to="`/categories/${category}`"
                            class="hover:bg-gray-100 border border-slate-300 p-2 rounded-full">
                            {{ capitalizeCategory(category) }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-from {
    opacity: 0;
}
</style>
