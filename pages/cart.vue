<script setup>
  import { Trash2 } from 'lucide-vue-next';

  const { items, totalPrice, removeFromCart } = useCart();
</script>
<template>
  <div class="px-5">
    <div
      v-for="(product, index) in items"
      :key="index"
      class="flex flex-col md:flex-row gap-8 md:w-9/12 border-b border- pb-6 md:py-1 md:justify-between">
      <div class="flex items-center md:w-96">
        <div class="pt-2 flex flex-col items-center">
          <p class="font-semibold mb-2 text-lg">Product</p>
          <img class="w-28 h-32" :src="product.image" >
        </div>
        <div class="ml-4">
          <p class="font-semibold mb-4">{{ product.title }}</p>
          <button
            class="hidden md:flex flex-row gap-4 items-center rounded-md bg-red-500 text-white px-2 py-1"
            @click="removeFromCart(product)">
            <Trash2 size="15" />
            <p>Remove</p>
          </button>
        </div>
      </div>
      <div class="flex flex-row gap-14 md:gap-8 md:pt-2 md:pb-4 md:w-60">
        <div class="flex flex-col pb-1 gap-8 md:justify-between md:items-center">
          <p class="font-semibold mb-2 text-lg">Price</p>
          <p class="font-semibold">{{ product.price }}</p>
        </div>
        <div class="flex flex-col gap-8 md:justify-between md:items-center">
          <p class="font-semibold text-lg">Quantity</p>
          <QuantityButtons :product="product" :quantity="product.quantity"/>
        </div>
      </div>
      <button
        class="md:hidden flex flex-row gap-4 items-center rounded-md bg-red-500 text-white px-2 py-1"
        @click="removeFromCart(product)">
        <Trash2 size="15" />
        <p>Remove</p>
      </button>
    </div>
    <NuxtLink to="/">
      <div class="border-b py-2 text-indigo-500 md:w-9/12 hover:underline">
        <p>Add more items</p>
      </div>
    </NuxtLink>
    <div v-if="items.length" class="my-4">
      <h3 class="text-orange-500 font-bold">Total: Ksh{{ totalPrice }}</h3>
      <!--<button @click="checkout">Complete Purchase</button>-->
    </div>
    <div v-else class="border-t border-slate-300 pt-10 pb-3 px-2 text-center mb-4">
      <p class="text-xl mb-4">Your cart is empty. Start adding some items!</p>
      <NuxtLink
        to="/"
        class="border border-indigo-500 text-indigo-500 hover:bg-indigo-100 px-2 py-1 rounded-md transition-hover duration-100">
        Add items
      </NuxtLink>
      <div class="mt-10 flex justify-start border-y border-slate-300 py-4">
        <h3 class="text-orange-500 font-bold text-lg">Total: Ksh {{ totalPrice }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
