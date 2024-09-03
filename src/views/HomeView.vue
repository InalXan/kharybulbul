<script setup>
import NavigationComponent from '@/components/NavigationComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>
<template>
  <div id="container" class="w-full min-h-screen">
    <NavigationComponent />
    <!-- intro start  -->
    <div id="intro" class="flex justify-center items-center w-full min-h-[50vh]">
      <div>
        <RouterLink to="/chocolate" class="p-3 bg-primary text-second">Şokoladlar</RouterLink>
      </div>
    </div>
    <!-- intro end  -->
    <!-- category start  -->
    <div class="w-full min-h-[45vh] flex flex-col">
      <div class="w-full h-[10vh] flex justify-center items-center text-3xl">
        <h1 class="text-thirty">Əl işimiz olan şkoladlar</h1>
      </div>
      <div class="flex flex-wrap justify-around flex-2 w-full">
        <div class="w-full text-center max-w-[300px] my-2">
          <img src="../assets/chocolates/1.jpg" alt="" />
          <h1 class="text-xl text-primary">lorem ipsum</h1>
        </div>
        <div class="w-full text-center max-w-[300px] my-2">
          <img src="../assets/chocolates/2.jpg" alt="" />
          <h1 class="text-xl text-primary">lorem ipsum</h1>
        </div>
        <div class="w-full text-center max-w-[300px] my-2">
          <img src="../assets/chocolates/3.jpg" alt="" />
          <h1 class="text-xl text-primary">lorem ipsum</h1>
        </div>
        <div class="w-full text-center max-w-[300px] my-2">
          <img src="../assets/chocolates/4.jpg" alt="" />
          <h1 class="text-xl text-primary">lorem ipsum</h1>
        </div>
      </div>
    </div>
    <!-- category end  -->
    <div id="line" class="w-full flex justify-center">
      <div class="w-full max-w-[1400px] h-[1px] bg-shadow"></div>
    </div>
    <!-- next section start  -->
    <div class="w-full flex justify-center">
      <div>
        <h1 class="text-3xl text-thirty text-center my-12">Sifarişlər</h1>
        <p class="w-full max-w-[1000px] text-center text-shadow">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut fuga minus illum repellendus
          libero sed nemo error tempora beatae excepturi cupiditate vero alias doloribus officiis,
          nihil soluta nobis consequatur? Quos! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ut fuga minus illum repellendus libero sed nemo error tempora beatae excepturi
          cupiditate vero alias doloribus officiis, nihil soluta nobis consequatur? Quos! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Ut fuga minus illum repellendus libero
          sed nemo error tempora beatae excepturi cupiditate vero alias doloribus officiis, nihil
          soluta nobis consequatur? Quos!
        </p>
      </div>
    </div>
    <!-- next section end  -->
    <!-- next section start  -->
    <div class="w-full flex flex-col justify-center">
      <div class="w-full text-center text-3xl text-thirty my-5">
        <h1>Ən çox satılanlar</h1>
      </div>
      <div class="w-full flex justify-around flex-wrap flex-3">
        <div
          class="w-full max-w-[200px] min-h-[30vh] flex flex-col justify-center border-2 p-2 m-5 border-shadow"
        >
          <img src="../assets/chocolates/1.jpg" class="relative w-full h-full" alt="" />
          <h1 class="text-xl text-primary">lorem ipsum</h1>
          <div class="m-2">
            <a
              href=""
              class="w-full p-2 flex items-center justify-center border-2 border-second bg-primary text-second"
              >Şokoladlar</a
            >
          </div>
        </div>

        <div
          class="w-full max-w-[200px] min-h-[30vh] flex flex-col justify-center border-2 p-2 m-5 border-shadow"
        >
          <img src="../assets/chocolates/2.jpg" class="relative w-full h-full" alt="" />
          <h1 class="text-xl text-primary">lorem ipsum</h1>
          <div class="m-2">
            <a
              href=""
              class="w-full p-2 flex items-center justify-center border-2 border-second bg-primary text-second"
              >Şokoladlar</a
            >
          </div>
        </div>

        <div
          class="w-full max-w-[200px] min-h-[30vh] flex flex-col justify-center border-2 p-2 m-5 border-shadow"
        >
          <img src="../assets/chocolates/3.jpg" class="relative w-full h-full" alt="" />
          <h1 class="text-xl text-primary">lorem ipsum</h1>
          <div class="m-2">
            <a
              href=""
              class="w-full p-2 flex items-center justify-center border-2 border-second bg-primary text-second"
              >Şokoladlar</a
            >
          </div>
        </div>
        <div
          class="w-full max-w-[200px] min-h-[30vh] flex flex-col justify-center border-2 p-2 m-5 border-shadow"
        >
          <img src="../assets/chocolates/4.jpg" class="relative w-full h-full" alt="" />
          <h1 class="text-xl text-primary">lorem ipsum</h1>
          <div class="m-2">
            <a
              href=""
              class="w-full p-2 flex items-center justify-center border-2 border-second bg-primary text-second"
              >Şokoladlar</a
            >
          </div>
        </div>

        <div
          class="w-full max-w-[200px] min-h-[30vh] flex flex-col justify-center border-2 p-2 m-5 border-shadow"
        >
          <img src="../assets/chocolates/6.jpg" class="relative w-full h-full" alt="" />
          <h1 class="text-xl text-primary">lorem ipsum</h1>
          <div class="m-2">
            <a
              href=""
              class="w-full p-2 flex items-center justify-center border-2 border-second bg-primary text-second"
              >Şokoladlar</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- next section end  -->
    <div id="line" class="w-full p-5 flex justify-center">
      <div class="w-full max-w-[1400px] h-[1px] bg-shadow"></div>
    </div>

    <!-- next section start  -->
    <FooterComponent />
    <!-- next section end  -->
  </div>
</template>

<style scoped>
#intro {
  background: url('../assets/intro.jpg');
  background-position: center;
  background-size: 100%;
}
</style>
