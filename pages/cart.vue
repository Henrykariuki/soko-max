<script setup >
import { Minus, Plus, Trash2 } from 'lucide-vue-next';


const { items, totalPrice, increament, decreament, removeFromCart, count} = useCart()


</script>
<template>
    <div class="px-20">
        <h1>Checkout</h1>
        <div v-for="(product, index) in items" :key="index" class="w-9/12 border-b border-slate-300 py-1 flex justify-between">
            <div class="flex items-center w-96">
                <div class="pt-2 flex flex-col items-center">
                    <p class="font-semibold mb-2 text-lg">Product</p>
                    <img class="w-24 h-32" :src="product.image">
                </div>
                <div class="ml-4">
                    <p class="font-semibold mb-4">{{ product.title }}</p>
                    <button @click="removeFromCart(product)"
                        class="flex flex-row gap-4 items-center rounded-md bg-red-500 text-white px-2 py-1">
                        <Trash2 size="15" />
                        <p>Remove</p>
                    </button>
                </div>
            </div>
            <div class=" flex flex-row gap-8 pt-2 pb-4 md:w-60">
                <div class="flex flex-col pb-1 justify-between items-center">
                    <p class="font-semibold mb-2 text-lg">Price</p>
                    <p class="font-semibold">{{ product.price }}</p>
                </div>
                <div class="flex flex-col justify-between items-center">
                    <p class="font-semibold mb-2 text-lg">Quantity</p>
                    <div class="flex items-center bg-indigo-500 text-white px-3 py-1 rounded-full">
                        <button @click="decreament">
                            <Minus size="16" />
                        </button>
                        <div class=" px-8 md:px-6">{{ count }}</div>
                        <button @click="increament">
                            <Plus size="16" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="items.length" class="my-4">
            <h3 class="text-orange-500 font-bold">Total: {{ totalPrice }}</h3>
            <!--<button @click="checkout">Complete Purchase</button>-->
        </div>
        <div v-else>
            <p>Your cart is empty.</p>
        </div>
    </div>
</template>

<style scoped>

</style>