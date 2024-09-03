<script setup>
import { ref } from 'vue'
import NavigationComponent from '../components/NavigationComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

// MusicBoxes array with image URLs
const MusicBoxes = ref([
  { img: new URL('../assets/katalog/Kataloq-1.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-2.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-3.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-4.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-5.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-6.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-7.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-8.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-9.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-10.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-11.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-12.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-13.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-14.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-15.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-16.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-17.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-18.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-19.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-20.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-21.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-22.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-23.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-24.jpg', import.meta.url).href },
  { img: new URL('../assets/katalog/Kataloq-25.jpg', import.meta.url).href }
])

// Ref to track the currently selected image for the modal
const selectedImage = ref(null)

// Function to open the modal with the selected image
const openModal = (image) => {
  selectedImage.value = image
}

// Function to close the modal
const closeModal = () => {
  selectedImage.value = null
}
</script>

<template>
  <div id="container" class="w-full min-h-[100vh]">
    <!-- Navigation Component -->
    <NavigationComponent />

    <!-- Header Section -->
    <div
      id="header"
      class="w-full p-3 m-3 text-4xl text-thirty font-bold flex justify-center items-center"
    >
      <div class="w-28 h-1 m-5 bg-thirty"></div>
      <div>
        <h1>Musiqi Qutuları</h1>
      </div>
      <div class="w-28 h-1 m-5 bg-thirty"></div>
    </div>

    <!-- Catalog Section -->
    <div id="catalog" class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        v-for="(MusicBox, index) in MusicBoxes"
        :key="index"
        class="w-full cursor-pointer"
        @click="openModal(MusicBox.img)"
      >
        <img class="w-full" :src="MusicBox.img" alt="" />
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

    <!-- Footer Component -->
    <FooterComponent />
  </div>
</template>

<style scoped>
/* Add some styles to make the modal and images look better */
#catalog img {
  transition: transform 0.3s;
}

#catalog img:hover {
  transform: scale(1.05);
}

.modal img {
  max-width: 90%;
  max-height: 90%;
}
</style>
