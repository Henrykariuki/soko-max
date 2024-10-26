<script setup>
  import { Star } from 'lucide-vue-next';
  import { useRoute } from 'vue-router';

  const buttons = [
    { name: 'Review' },
    { name: 'FAQs' },
    { name: 'Shipping' },
    { name: 'Return Policy' },
    { name: 'Warranty' },
  ];

  const activeIndex = ref(null);

  const route = useRoute();

  const productId = route.params.id;

  const { data } = await useFetch(`https://fakestoreapi.com/products/${productId}`);

  const { addToCart, items,   } = useCart();

  const productInCart = computed(() => {
    return items.value.find((e) => e.id == productId);
  });
</script>
<template>
  <div>
    <div class="md:grid md:grid-cols-2 md:gap-x-10">
      <div class="flex flex-col items-center gap-4">
        <div>
          <img class="h-80 rounded-md" :src="data.image" >
        </div>
        <div class="flex flex-row gap-2">
          <div
            v-for="i in 4"
            :key="i"
            class="hover:border-2 hover:border-indigo-500 rounded-md transition-border duration-50">
            <img class="w-20 h-20 object-cover rounded-md" :src="data.image" >
          </div>
        </div>
      </div>
      <div class="pb-20">
        <div class="border-b border-slate-200 flex flex-col gap-6 py-4">
          <div>
            <p class="font-bold text-xl">{{ data.title }}</p>
          </div>
          <div>
            <p class="text-gray-600">{{ data.description }}</p>
          </div>
          <div class="flex items-center">
            <div class="flex flex-row gap-1">
              <Star v-for="i in 5" :key="i" size="12" />
            </div>
            <p class="text-gray-600 text-xs">( 121 )</p>
          </div>
        </div>
        <div class="border-b border-slate-200 py-8">
          <div>
            <p class="font-semibold text-lg">${{ data.price }}</p>
          </div>
        </div>
        <div
          class="border-b border-slate-200 md:py-8 flex flex-row justify-around md:items-center md:justify-between py-2">
          <div class="flex items-center bg-gray-100 px-1 py-2 rounded-full">
            <QuantityButtons :product="data" :quantity="productInCart?.quantity || 0" />
          </div>
          <button
            v-if="!productInCart"
            class="whitespace-nowrap bg-green-400 hover:bg-green-500 rounded-full px-10 md:px-20 py-2"
            @click="addToCart(data)">
            <p class="text-white">Add to cart</p>
          </button>
          <NuxtLink
            v-else
            to="/cart"
            class="bg-indigo-500 text-white rounded-full px-10 md:px-20 py-2 hover:bg-indigo-600 mr-4">
            Checkout
          </NuxtLink>
        </div>
        <div
          class="wrapper whitespace-nowrap w-full overflow-auto border-b border-slate-200 flex items-end h-24">
          <div
            v-for="(info, index) in buttons"
            :key="`id-${index}`"
            :class="
              activeIndex === index
                ? 'transition duration-100 px-4 py-2 border-b border-indigo-500 text-indigo-500'
                : 'px-4 py-2 border-b border-slate-200 text-gray-600'
            "
            @click="activeIndex = index">
            <p>{{ info.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .wrapper::-webkit-scrollbar {
    width: 0;
  }
</style>
