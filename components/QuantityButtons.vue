<script setup>
  import { Minus, Plus } from 'lucide-vue-next';

  defineProps({
    product: {
      type: Object,
      required: true,
    },
    quantity: {
      type: Number,
      required: true
    }
  });

  const { increamentQuantity, decreamentQuantity } = useCart();


</script>

<template>
  <div class="flex items-center bg-indigo-500 text-white px-3 py-2 rounded-full">
    <button class="px-2" @click="decreamentQuantity(product)">
      <Minus size="16" />
    </button>
    <div class="px-8">{{ quantity || 0 }}</div>
    <button class="px-2" @click="increamentQuantity(product)">
      <Plus size="16" />
    </button>
  </div>
</template>

<style scoped></style>
