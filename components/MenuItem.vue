<script setup>
import { ChevronDown, ChevronUp } from 'lucide-vue-next';
import { ref } from 'vue';
import { useRouter } from '#app'; // Nuxt-specific router import

const expanded = ref(false);
const router = useRouter();

const props = defineProps({
    item: {
        type: Object,
        required: true
    }
});

const onclick = () => {
    if (props.item.children) {
        expanded.value = !expanded.value;
    } else {
        router.push({ path: props.item.path });
    }
};
</script>

<template>
  <div class="relative">
    <div @click="onclick" class="flex flex-row gap-14 items-center cursor-pointer">
      <p class="font-semibold">{{ item.title }}</p>
      <ChevronUp v-if="expanded && item.children" size="15" />
      <ChevronDown v-else-if="item.children" size="15" />
    </div>
    <Transition name="fade">
      <div v-if="item.children && expanded"
           class="absolute -left-2 mt-2 p-4 leading-8 z-50 bg-white shadow-lg border rounded-md">
        <MenuItem v-for="(root, rootIndex) in item.children" :key="`root-${rootIndex}`" :item="root" />
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
