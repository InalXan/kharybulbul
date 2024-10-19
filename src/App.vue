<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import LoaderComponent from '@/components/LoaderComponent.vue'

const isLoading = ref(true)

setTimeout(() => {
  isLoading.value = false
}, 3000)
</script>

<template>
  <LoaderComponent v-if="isLoading" />

  <RouterView v-else />
</template>
