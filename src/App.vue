<script setup>
import MyHeader from './components/MyHeader.vue'
import { RouterView } from 'vue-router';
import Electronics from './components/Electronics.vue'
</script>

<template>
  <header>
      <MyHeader/>
  </header>
  <main>
    <Electronics/>
  </main>
</template>
<style scoped>

</style>
