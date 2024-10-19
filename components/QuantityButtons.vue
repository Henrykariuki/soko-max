<script setup>
import { watch } from 'vue'
import { Minus, Plus } from 'lucide-vue-next';


const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});

const { increamentQuantity, decreamentQuantity } = useCart();
const quantity = ref(props.product.quantity);

// Handle increment and decrement
const incrementQuantity = () => {
    increamentQuantity(props.product);
    quantity.value = props.product.quantity;
};

const decrementQuantity = () => {
    decreamentQuantity(props.product);
    quantity.value = props.product.quantity;
};

watch(() => props.product.quantity, (newQuantity) => {
    quantity.value = newQuantity;
});
</script>

<template>
    <div class="flex items-center bg-indigo-500 text-white px-3 py-1 rounded-full">
        <button @click="decrementQuantity" class="px-2">
            <Minus size="16" />
        </button>
        <div class="px-8">{{ quantity }}</div>
        <button @click="incrementQuantity" class="px-2">
            <Plus size="16" />
        </button>
    </div>
</template>

<style scoped>
button {
    cursor: pointer;
}
</style>
