<script setup>
import { Mail, MessageCircle, Phone, Facebook, Twitter } from 'lucide-vue-next';
</script>
<template>
    <div class="w-full border border-black pb-10">
        <div class=" border border-black mx-12 mb-6 flex justify-between">
            <div>
                <h2 class="text-2xl font-semibold">SokoMax</h2>
            </div>
            <div class="flex flex-col gap-2">
                <h2 class="text-2xl font-semibold">Company</h2>
                <p>About Us</p>
                <p>Privacy Policy</p>
                <p>Terms of Services</p>
            </div>
            <div class="flex flex-col gap-2">
                <h2 class="text-2xl font-semibold">Contact</h2>
                <div class="flex flex-row gap-2">
                    <Mail size="18" />
                    <p>Email</p>
                </div>
                <div class="flex flex-row gap-2">
                    <MessageCircle size="18" />
                    <p>WhatsApp</p>
                </div>
                <div class="flex flex-row gap-2">
                    <Phone size="18" />
                    <p>TEL +254713140987</p>
                </div>
            </div>
        </div>
        <div class="flex flex-row gap-2 justify-center ">
            <button class="hover:scale-95 duration-100">
                <Facebook />
            </button>
            <button class="hover:scale-95 duration-100">
                <Twitter />
            </button>
            <button class="hover:scale-95 duration-100">
                <Mail />
            </button>
            <button class="hover:scale-95 duration-100">
                <Phone />
            </button>
        </div>
        <div class="flex justify-center">
            &copy;<p>Copyright 2024 - All Rights Reserved</p>
        </div>
    </div>
</template>
<style scoped>
</style>