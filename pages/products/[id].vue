<script setup>
import { Star, Minus, Plus } from 'lucide-vue-next';
import { useRoute } from 'vue-router';




const buttons = [
    { name: 'Review' },
    { name: 'FAQs' },
    { name: 'Shipping' },
    { name: 'Return Policy' },
    { name: 'Warranty' }
]

const activeIndex = ref(null);


const count = ref(0);

const increament = () => {
    count.value++
}

const decreament = () => {
    if (count.value > 0) count.value--
}

const route = useRoute()

const productId = route.params.id

const { data } = await useFetch(`https://fakestoreapi.com/products/${productId}`)

</script>
<template>
    <div>
        <div class="md:grid md:grid-cols-2 md:gap-x-10 ">
            <div class=" flex flex-col items-center gap-4">
                <div>
                    <img class="h-80 rounded-md" :src="data.image">
                </div>
                <div class="flex flex-row gap-2">
                    <div v-for="i in 4" :key="i"
                        class=" hover:border-2 hover:border-indigo-500 rounded-md transition-border duration-50">
                        <img class="w-20 h-20 object-cover rounded-md " :src="data.image">
                    </div>
                </div>
            </div>
            <div class=" pb-20">
                <div class="border-b border-slate-200 flex flex-col gap-2 py-4">
                    <div>
                        <p class="font-bold text-xl">{{data.title}}</p>
                    </div>
                    <div>
                        <p class="text-gray-600">{{ data.description }}</p>
                    </div>
                    <div class="flex items-center">
                        <div class="flex flex-row gap-1">
                            <Star v-for="i in 5" :key="i" size="12" />
                        </div>
                        <p class="text-gray-600 text-xs">(121)</p>
                    </div>
                </div>
                <div class="border-b border-slate-200 py-8">
                    <div>
                        <p class="font-semibold text-lg">${{data.price}}</p>
                    </div>
                </div>
                <div
                    class=" border-b border-slate-200 md:py-8 flex flex-row justify-around md:items-center md:justify-between py-2">
                    <div class="flex items-center bg-gray-100 px-1 py-2 rounded-full">
                        <button @click="decreament" class=" py-1 px-3">
                            <Minus size="16" />
                        </button>
                        <div class=" px-10 md:px-14">{{ count }}</div>
                        <button @click="increament" class=" py-1 px-3">
                            <Plus size="16" />
                        </button>
                    </div>
                    <button class="whitespace-nowrap bg-green-400 hover:bg-green-500  rounded-full px-10 md:px-20 py-2">
                        <p class="text-white">Add to cart</p>
                    </button>
                </div>
                <div class="wrapper whitespace-nowrap w-full overflow-auto border-b border-slate-200 flex items-end h-24 ">
                    <div v-for="(info, index) in buttons" :key="`id-${index}`"
                        :class="activeIndex === index ? 'transition duration-100 px-4 py-2 border-b border-indigo-500 text-indigo-500' : 'px-4 py-2 border-b border-slate-200 text-gray-600'"
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