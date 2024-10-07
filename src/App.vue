<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="whatsapp" class="fixed z-50 right-0 bottom-0">
    <a target="_blank" href="https://wa.me/994557140385"
      ><img
        class="w-16 sm:w-28"
        src="https://static.vecteezy.com/system/resources/thumbnails/018/930/564/small/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png"
        alt=""
    /></a>
  </div>
  <RouterView />
</template>

<style scoped></style>
