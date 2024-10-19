<script setup>
import NavigationComponent from '@/components/general_components/NavigationComponent.vue'
import FooterComponent from '@/components/general_components/FooterComponent.vue'
</script>
<template>
  <div id="container" class="w-full min-h-screen">
    <NavigationComponent />
    <!-- intro start  -->
    <div
      id="intro"
      class="flex bg-intro_image justify-center relative items-center flex-col w-full min-h-[80vh]"
    >
      <div id="overlay" class="absolute w-full h-full bg-dark"></div>
      <div class="text-5xl text-center font-bold z-10 font-updock">
        <h1 class="text-primary">Xarı Bülbülə Xoş Gəlmisiniz</h1>
        <h1 class="text-second">Hər Növ Şokolad və Musiqi Qutuları</h1>
        <div class="w-full max-w-[600px]">
          <p class="text-xs font-poppins m-3 text-second">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptatem ex,
            quidem maxime sapiente culpa, dolorem doloribus
          </p>
        </div>
      </div>
      <div class="py-5 z-10">
        <RouterLink to="/chocolates" class="p-3 text-second border-2 border-primary rounded-2xl"
          >Şokoladlar</RouterLink
        >
      </div>
    </div>
    <!-- intro end  -->

    <!-- next section start  -->
    <FooterComponent />
    <!-- next section end  -->
  </div>
</template>
