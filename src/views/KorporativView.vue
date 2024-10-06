<script setup>
import NavigationComponent from '@/components/general_components/NavigationComponent.vue'
import FooterComponent from '@/components/general_components/FooterComponent.vue'
</script>
<template>
  <NavigationComponent />
  <div id="header" class="w-full text-4xl text-dark font-bold flex justify-center items-center">
    <div class="w-28 h-1 m-5 bg-dark"></div>
    <div>
      <h1>Korporativ</h1>
    </div>
    <div class="w-28 h-1 m-5 bg-dark"></div>
  </div>
  <!-- Catalog Grid -->
  <div class="w-full h-full md:h-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-2 py-4">
    <!-- image  -->
    <div class="select-none mb-6 w-full">
      <div class="relative pb-64 cursor-pointer">
        <img
          class="absolute w-full h-full rounded-lg object-cover border-b shadow-md"
          src="https://pasha-holding.az/site/templates/images/share.png"
          alt="sponsor"
        />
      </div>
    </div>
    <!-- image  -->
    <div class="select-none mb-6 w-full">
      <div class="relative pb-64 cursor-pointer">
        <img
          class="absolute w-full h-full rounded-lg object-cover border-b shadow-md"
          src="https://logowik.com/content/uploads/images/888_hiltonhotel.jpg"
          alt="sponsor"
        />
      </div>
    </div>
  </div>

  <FooterComponent />
</template>
