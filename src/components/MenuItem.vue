<script setup>
import { ChevronDown, ChevronUp } from 'lucide-vue-next';
import { useRoute, useRouter } from 'vue-router';
import {ref} from 'vue';

const expanded = ref(false);
const router = useRouter()
const onclick = ()=>{
    console.log('message')
    if (props.item.children) {
        expanded.value = !expanded.value
    } else {
        router.push({path: props.item.path})
    }
}


const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})


</script>
<template>
    <div @click="onclick" class="flex flex-row gap-2 items-center">
        <p class="font-semibold">{{ item.title }}</p>
        <ChevronUp v-if="expanded && item.children" size="15"/>
        <ChevronDown v-else-if="item.children" size="15"/>
    </div>
    <div v-if="item.children && expanded">
        <MenuItem v-for="(root, rootIndex) in item.children" :key="`root-${rootIndex}`" :item="root" />
    </div>
</template>
<style scoped>

</style>