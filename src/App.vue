<script setup>
import MyHeader from './components/MyHeader.vue'
import { RouterView } from 'vue-router';
import Electronics from './pages/categories/Electronics.vue'
</script>

<template>
  <header>
      <MyHeader></MyHeader>
  </header>
  <main >
    <RouterView></RouterView>
  </main>
</template>
<style scoped>

</style>
