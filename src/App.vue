<template>
  <div class="min-h-screen bg-dark flex">
    <MainLayout>
      <router-view />
    </MainLayout>
  </div>
</template>

<script setup lang="ts">
import MainLayout from './layouts/MainLayout.vue'
</script>
