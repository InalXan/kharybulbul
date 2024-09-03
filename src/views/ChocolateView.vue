<script setup>
import { ref } from 'vue'
import NavigationComponent from '../components/NavigationComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
// MusicBoxes array with image URLs
const Chocolates = ref([
  { img: new URL('../assets/chocolates/1.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/2.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/3.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/4.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/5.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/6.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/7.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/8.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/9.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/10.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/11.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/12.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/13.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/14.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/15.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/16.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/17.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/18.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/19.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/20.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/21.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/22.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/23.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/24.jpg', import.meta.url).href },
  { img: new URL('../assets/chocolates/25.jpg', import.meta.url).href }
])

const selectedImage = ref(null)

const openModal = (image) => {
  selectedImage.value = image
}

const closeModal = () => {
  selectedImage.value = null
}
</script>

<template>
  <div id="container" class="w-full min-h-[100vh] overflow-x-hidden">
    <!-- navigation component  -->
    <NavigationComponent />
    <div
      id="header"
      class="w-full p-3 m-3 text-4xl text-thirty font-bold flex justify-center items-center"
    >
      <div class="w-28 h-1 m-5 bg-thirty"></div>
      <div>
        <h1>Şokoladlar</h1>
      </div>
      <div class="w-28 h-1 m-5 bg-thirty"></div>
    </div>
    <!-- next section start  -->
    <div id="chocolate" class="grid grid-cols-1 md:grid-cols-3 m-3 gap-4">
      <div
        v-for="(Chocolate, index) in Chocolates"
        :key="index"
        class="w-full cursor-pointer"
        @click="openModal(Chocolate.img)"
      >
        <img class="w-full" :src="Chocolate.img" alt="" />
      </div>
    </div>

    <!-- Modal for Enlarged Image -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      @click="closeModal"
    >
      <img :src="selectedImage" class="max-w-full max-h-full" alt="Enlarged Music Box" />
    </div>

    <!-- next section end  -->
    <!-- footer component  -->
    <FooterComponent />
  </div>
</template>

<style scoped>
#chocolate img {
  transition: transform 0.3s;
}

#chocolate img:hover {
  transform: scale(1.05);
}

.modal img {
  max-width: 90%;
  max-height: 90%;
}
</style>
