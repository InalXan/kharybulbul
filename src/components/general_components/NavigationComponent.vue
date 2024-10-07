<template>
  <!-- Navigation bar -->
  <nav
    :class="[
      'w-full bg-second border-b border-shadow py-1 z-50 top-0 transition-all duration-300',
      isShrunk ? 'bg-gray-800 py-1' : 'bg-gray-900 py-3',
    ]"
    id="header"
    class="fixed"
  >
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between px-6"
    >
      <label for="menu-toggle" class="cursor-pointer md:hidden block">
        <svg
          class="fill-current text-gray-100"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input class="hidden" type="checkbox" id="menu-toggle" />

      <div
        class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
        id="menu"
      >
        <ul
          class="md:flex items-center justify-between text-base text-gray-100 pt-4 md:pt-0"
        >
          <li>
            <RouterLink
              class="inline-block no-underline hover:text-white hover:underline py-2 px-4"
              to="/"
              >Ana Səhifə</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="inline-block no-underline hover:text-white hover:underline py-2 px-4"
              to="/about"
              >Haqqımızda</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="inline-block no-underline hover:text-white hover:underline py-2 px-4"
              to="/ironworks"
              >Dəmir Konstruksiyalar</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="inline-block no-underline hover:text-white hover:underline py-2 px-4"
              to="/furnitures"
              >Mebellər</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="inline-block no-underline hover:text-white hover:underline py-2 px-4"
              to="/contact"
              >Əlaqə</RouterLink
            >
          </li>
        </ul>
      </div>

      <div class="order-1 md:order-2">
        <RouterLink
          class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-100 text-xl"
          to="/"
        >
          <img src="../../assets/img/logo.png" class="w-16" alt="Logo" />
        </RouterLink>
      </div>
    </div>
  </nav>
  <br />
  <br />
  <br />
  <br />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isShrunk = ref(false);

const handleScroll = () => {
  if (window.scrollY > 50) {
    isShrunk.value = true;
  } else {
    isShrunk.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped>
#menu-toggle:checked + #menu {
  display: block;
}
</style>
