<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
8
<template>
  <div class="w-full h-[100vh] flex justify-start items-start">
    <aside class="sidebar bg-stone-800 py-3 px-4">
      <router-link to="/warehouses">Warehouses</router-link>
      <router-link to="/items">Items</router-link>
    </aside>
    <main class="main-content">
      <p>centered</p>
    </main>
  </div>
</template>

<style scoped lang="css">
.sidebar {
  @apply h-[100vh] overflow-y-auto overflow-x-hidden;
  @apply flex flex-col justify-start items-start;
}

.main-content {
  @apply w-full h-[100vh] overflow-y-auto overflow-x-hidden;
}
</style>