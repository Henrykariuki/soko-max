<script setup >
const route = useCart()





</script>
<template>
    <div>
        <h1>Checkout</h1>
        <div v-for="(product, index) in cart" :key="index">
            <h2>{{ product.title }}</h2>
            <p>{{ product.price }}</p>
            <button @click="removeFromCart(index)">Remove</button>
        </div>

        <div v-if="cart.length">
            <h3>Total: {{ totalPrice }}</h3>
            <button @click="checkout">Complete Purchase</button>
        </div>
        <div v-else>
            <p>Your cart is empty.</p>
        </div>
    </div>
</template>

<style scoped>

</style>