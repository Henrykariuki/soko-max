<script setup>
  import { ShoppingCart, Search , ChevronDown, ChevronUp } from 'lucide-vue-next';
  

  const categories = useCategories();

  const isExpanded = ref(false);

  const toggleCategories = () => {
    isExpanded.value = !isExpanded.value;
  };

  const capitalizeCategory = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const { totalQuantity } = useCart();

</script>
<template>
  <div>
    <div class="px-4 border-b border-slate-300 mb-4 py-5 flex flex-col gap-4 md:gap-8">
      <div class="flex justify-between mx-2 md:flex md:justify-between">
        <NuxtLink
          to="/"
          class="hover:bg-gray-200 transition-hover duration-100 rounded-md flex items-center cursor-pointer">
          <img class="w-12 h-10 p-1" src="/images/sokologo.jpg" alt="SokoMax Logo" >
          <p class="font-bold text-2xl text-green-900">SokoMax</p>
        </NuxtLink>
        <div class="relative hidden md:block">
          <input
            type="text"
            placeholder="Search Product"
            class="outline-0 bg-gray-100 border hover:border-indigo-500 transition-hover duration-100 px-4 py-2 w-96 border-gray-300 rounded-full" >
          <button class="absolute rounded-full bg-white p-2 right-2 top-1 text-gray-500">
            <Search size="16" />
          </button>
        </div>
        <div class="flex flex-row gap-6 items-center">
          <NuxtLink
            to="/cart"
            class="relative flex flex-row gap-1 border px-2 py-1 rounded-md hover:bg-indigo-100">
            <ShoppingCart />
            <p class="font-medium">Cart</p>
            <div
              class="absolute -top-3 left-3 w-2 h-2 flex justify-center items-center bg-indigo-700 text-white p-2 rounded-full text-xs">
              {{ totalQuantity }}
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="relative md:hidden mx-auto">
        <input
          type="text"
          placeholder="Search Product"
          class="outline-0 bg-gray-100 border hover:border-indigo-500 transition-hover duration-100 px-4 py-2 w-96 border-gray-300 rounded-full" >
        <button class="rounded-full bg-white p-2 absolute right-2 top-1 text-gray-500">
          <Search size="16" />
        </button>
      </div>
      <div class="flex flex-col gap-4 md:flex md:flex-row md:gap-40 md:items-center">
        <div
          class="flex flex-row gap-4 w-32 md:w-44 md:gap-14 relative border border-slate-300 p-2 rounded-full items-center cursor-pointer"
          @click="toggleCategories">
          <p class="font-semibold">Categories</p>
          <ChevronUp v-if="!isExpanded" size="15" />
          <ChevronDown v-else size="15" />
        </div>
        <Transition name="fade">
          <div
            v-if="isExpanded"
            class="absolute top-28 mt-24 md:mt-6 py-4 pl-4 pr-6 leading-8 z-50 bg-white shadow-lg border rounded-md">
            // eslint-disable-next-line vue/valid-v-for
            <div v-for="category in categories" :key="category">
              <NuxtLink :to="`/categories/${category}`">
                {{ capitalizeCategory(category) }}
              </NuxtLink>
            </div>
          </div>
        </Transition>
        <div class="wrapper py-2 flex w-full overflow-auto md:flex md:flex-row md:gap-2">
          <div v-for="category in categories" :key="category">
            <NuxtLink
              :to="`/categories/${category}`"
              class="whitespace-nowrap hover:bg-indigo-100 hover:text-indigo-500 border border-slate-300 p-2 rounded-full transition-hover duration-100">
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
  .wrapper::-webkit-scrollbar {
    width: 0;
  }
</style>
