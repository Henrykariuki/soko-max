<script setup>
import { ChevronDown, ChevronUp } from 'lucide-vue-next';
import { ref } from 'vue';
import { useRouter } from '#app'; // Nuxt-specific router import


const router = useRouter();

const categories = useCategories()

const isExpanded = ref(false);

const toggleCategories = () => {
  isExpanded.value = !isExpanded.value;
};



</script>

<template>
  <div class="relative">
    <div @click="toggleCategories" class="flex flex-row gap-14 items-center cursor-pointer">
      <p class="font-semibold">{{ item.title }}</p>
      <ChevronUp v-if="!isExpanded" size="15" />
      <ChevronDown v-else size="15" />
    </div>
    <Transition name="fade">
      <div v-if="isExpanded"
           class="absolute -left-2 mt-2 py-4 pl-4 pr-12 leading-8 z-50 bg-white shadow-lg border rounded-md">
        <div v-for="category in categories" :key="categories">
          <NuxtLink>
            {{ category }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
