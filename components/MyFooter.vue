<script setup>
import { Mail, MessageCircle, Phone, Facebook, Twitter } from 'lucide-vue-next';

const company = [
    { name: 'About Us' },
    { name: 'Privacy Policy' },
    { name: 'Terms of Services' },
]
</script>
<template>
    <div class="flex flex-col gap-4 border border-black pb-10 bg-black text-white">
        <div class="flex flex-col md:flex-row  md:flex gap-6  border-b py-4 border-white md:mx-12 md:mb-6 md:p-6  md:justify-between">
            <div class="flex flex-col leading-8">
                <h2 class="text-2xl font-semibold">SokoMax</h2>
                <p>Create a free online store for your business today</p>
            </div>
            <div class="flex flex-col leading-8">
                <h2 class="text-2xl font-semibold">Company</h2>
                <p v-for="(b, index) in company" :key="`id${index}`" class="cursor-pointer hover:text-indigo-500">
                    {{ b.name }}
                </p>
            </div>
            <div class="flex flex-col leading-8">
                <h2 class="text-2xl font-semibold">Contact</h2>
                <button class="flex flex-row gap-2 items-center">
                    <Mail size="18" />
                    <p>Email</p>
                </button>
                <button class="flex flex-row gap-2 items-center">
                    <MessageCircle size="18" />
                    <p>WhatsApp</p>
                </button>
                <button class="flex flex-row gap-2 items-center">
                    <Phone size="18" />
                    <p>TEL +254713140987</p>
                </button>
            </div>
        </div>
        <div class="flex flex-row gap-2  md:flex-row md:gap-2 md:justify-center ">
            <button class="hover:scale-95 duration-100">
                <Facebook size="20" />
            </button>
            <button class="hover:scale-95 duration-100">
                <Twitter size="20" />
            </button>
            <button class="hover:scale-95 duration-100">
                <Mail size="20" />
            </button>
            <button class="hover:scale-95 duration-100">
                <Phone size="20" />
            </button>
        </div>
        <div class="flex md:justify-center md:leading-8">
            &copy;<p>Copyright 2024 - All Rights Reserved</p>
        </div>
    </div>
</template>
<style scoped>
</style>