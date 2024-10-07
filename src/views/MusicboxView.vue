<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import NavigationComponent from '@/components/general_components/NavigationComponent.vue'
import FooterComponent from '@/components/general_components/FooterComponent.vue'
// MusicBoxes array with image URLs
const MusicBoxes = ref([
  { img: new URL('../assets/katalog/Kataloq-1.jpg', import.meta.url).href, title: 'Üz Qapağı' },
  {
    img: new URL('../assets/katalog/Kataloq-2.jpg', import.meta.url).href,
    title: 'Xoş Gəlmisiniz'
  },
  {
    img: new URL('../assets/katalog/Kataloq-3.jpg', import.meta.url).href,
    title: 'Şuşanın Dağları'
  },
  { img: new URL('../assets/katalog/Kataloq-4.jpg', import.meta.url).href, title: 'Sarı Gəlin' },
  { img: new URL('../assets/katalog/Kataloq-5.jpg', import.meta.url).href, title: 'Qara Qızıl' },
  {
    img: new URL('../assets/katalog/Kataloq-6.jpg', import.meta.url).href,
    title: 'Böyük İpək Yolu'
  },
  { img: new URL('../assets/katalog/Kataloq-7.jpg', import.meta.url).href, title: 'Xarı Bülbül' },
  { img: new URL('../assets/katalog/Kataloq-8.jpg', import.meta.url).href, title: 'Bahar' },
  {
    img: new URL('../assets/katalog/Kataloq-9.jpg', import.meta.url).href,
    title: 'Qarabağ Atları'
  },
  { img: new URL('../assets/katalog/Kataloq-10.jpg', import.meta.url).href, title: 'Xəmsə' },
  { img: new URL('../assets/katalog/Kataloq-11.jpg', import.meta.url).href, title: 'Bülbül' },
  { img: new URL('../assets/katalog/Kataloq-12.jpg', import.meta.url).href, title: 'Nar' },
  {
    img: new URL('../assets/katalog/Kataloq-13.jpg', import.meta.url).href,
    title: 'Dəyərli İnsanlar Üçün Özəl'
  },
  { img: new URL('../assets/katalog/Kataloq-14.jpg', import.meta.url).href, title: 'Şokoladlar' },
  {
    img: new URL('../assets/katalog/Kataloq-15.jpg', import.meta.url).href,
    title: 'Xoşbəxt Anlar'
  },
  {
    img: new URL('../assets/katalog/Kataloq-16.jpg', import.meta.url).href,
    title: 'Sultan / Badamlı Marsipan'
  },
  {
    img: new URL('../assets/katalog/Kataloq-17.jpg', import.meta.url).href,
    title: 'Səbət'
  },
  {
    img: new URL('../assets/katalog/Kataloq-18.jpg', import.meta.url).href,
    title: 'Klassik trufel / Kakaolu trufel'
  },
  {
    img: new URL('../assets/katalog/Kataloq-19.jpg', import.meta.url).href,
    title: 'Kainat / Səma'
  },
  {
    img: new URL('../assets/katalog/Kataloq-20.jpg', import.meta.url).href,
    title: 'Buta / Arı Pətəyi'
  },
  {
    img: new URL('../assets/katalog/Kataloq-21.jpg', import.meta.url).href,
    title: 'Fındıqlı Ehram / Çiyələkli Şokolad'
  },
  {
    img: new URL('../assets/katalog/Kataloq-22.jpg', import.meta.url).href,
    title: 'Qara Qızıl / Porta]al Dilimi'
  },
  {
    img: new URL('../assets/katalog/Kataloq-23.jpg', import.meta.url).href,
    title: 'Digər'
  },
  {
    img: new URL('../assets/katalog/Kataloq-24.jpg', import.meta.url).href,
    title: 'Digər'
  },
  {
    img: new URL('../assets/katalog/Kataloq-25.jpg', import.meta.url).href,
    title: 'Xarı Bülbül Kafemizə Xoş Gəlmisiniz'
  }
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
  <NavigationComponent />

  <div
    id="header"
    class="w-full p-3 m-3 text-4xl text-dark font-bold flex justify-center items-center"
  >
    <div class="w-28 h-1 m-5 bg-dark"></div>
    <div>
      <h1>Musiqili Qutular (Kataloq)</h1>
    </div>
    <div class="w-28 h-1 m-5 bg-dark"></div>
  </div>
  <!-- Catalog Grid -->
  <div
    class="w-full h-full md:h-auto grid grid-cols-1 md:grid-cols-3 overflow-x-hidden gap-4 px-2 py-4"
  >
    <div
      v-for="(MusicBox, index) in MusicBoxes"
      :key="index"
      class="select-none mb-6 w-full"
      @click="openModal(MusicBox.img)"
    >
      <div class="relative pb-64 cursor-pointer">
        <img
          class="absolute w-full h-full rounded-lg object-cover border-b shadow-md"
          :src="MusicBox.img"
          alt="product image"
        />
      </div>

      <div class="px-4 -mt-16 relative">
        <div class="bg-white rounded-lg shadow-lg border">
          <div class="p-5">
            <div class="flex justify-between items-center">
              <div class="opacity-75 text-xs">
                <RouterLink class="hover:underline" to="/musicbox"> Kataloq </RouterLink>
              </div>
            </div>
            <RouterLink
              class="text-gray-800 font-updock block mt-2 truncate hover:underline font-medium text-2xl"
              to="/musicbox"
            >
              {{ MusicBox.title }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    v-if="selectedImage"
    class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
    @click="closeModal"
  >
    <img :src="selectedImage" class="w-full max-w-3xl max-h-[90vh]" alt="Enlarged Music Box" />
  </div>
  <FooterComponent />
</template>

<style scoped>
/* Catalog image hover effect */
img {
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.05);
}

.modal img {
  max-width: 90%;
  max-height: 90%;
}
</style>
