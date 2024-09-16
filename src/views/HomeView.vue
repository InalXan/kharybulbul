<template>
  <div id="container" class="w-full min-h-[100vh] overflow-x-hidden">
    <NavigationComponent />

    <div id="intro" class="flex justify-center items-center w-full min-h-[50vh]">
      <div>
        <RouterLink to="/chocolate" class="p-3 bg-primary text-second">Şokoladlar</RouterLink>
      </div>
    </div>

    <div id="header" class="w-full p-3 m-3 text-4xl text-thirty font-bold flex justify-center items-center">
      <div class="w-28 h-1 m-5 bg-thirty"></div>
      <div>
        <h1 class="text-thirty">Əl işimiz olan şkoladlar</h1>
      </div>
      <div class="w-28 h-1 m-5 bg-thirty"></div>
    </div>

    <div id="products" class="grid grid-cols-1 md:grid-cols-3 m-3 gap-4">
      <div
        v-for="product in products.slice(0, 3)"
        :key="product._id"
        class="product-item"
        @click="openModal(`${api.defaults.baseURL}/image/${product.image}`)"
      >
        <img
          v-if="product.image"
          class="w-full cursor-pointer product-image"
          :src="`${api.defaults.baseURL}/image/${product.image}`"
          alt="Product Image"
        />
      </div>

      <!-- Modal -->
      <div
        v-if="selectedImage"
        class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 backdrop-blur-md"
        @click.self="closeModal"
      >
        <img
          :src="selectedImage"
          class="modal-image"
          alt="Enlarged Product Image"
        />
      </div>
    </div>

    <div class="w-full flex justify-center">
      <div>
        <h1 class="text-3xl text-thirty text-center my-12">Sifarişlər</h1>
        <p class="w-full max-w-[1000px] text-center text-shadow">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut fuga minus illum repellendus
          libero sed nemo error tempora beatae excepturi cupiditate vero alias doloribus officiis,
          nihil soluta nobis consequatur? Quos!
        </p>
      </div>
    </div>

    <!-- Best Sellers Section -->
    <div v-if="showBestSellers" class="w-full flex flex-col justify-center">
      <div class="w-full text-center text-3xl text-thirty my-5">
        <h1>Ən çox satılanlar</h1>
      </div>
      <div class="w-full flex justify-around flex-wrap">
        <div
          v-for="product in bestSellers"
          :key="product._id"
          class="w-full max-w-[200px] min-h-[30vh] flex flex-col justify-center border-2 p-2 m-5 border-shadow"
        >
          <img
            :src="`${api.defaults.baseURL}/image/${product.image}`"
            class="w-full h-full object-cover"
            alt="Best Seller Image"
          />
          <h1 class="text-xl text-primary mt-2">{{ product.name }}</h1>
          <div class="m-2">
            <a
              href=""
              class="w-full p-2 flex items-center justify-center border-2 border-second bg-primary text-second"
            >
              Daha çox
            </a>
          </div>
        </div>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/api'
import NavigationComponent from '../components/NavigationComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

const products = ref([])
const selectedImage = ref(null)
const showBestSellers = ref(false)
const bestSellers = ref([])

const openModal = (image) => {
  selectedImage.value = image
}

const closeModal = () => {
  selectedImage.value = null
}

const fetchProducts = async () => {
  try {
    const response = await api.get('/product')
    products.value = response.data
    
    bestSellers.value = products.value.filter(product => product.trend)
    showBestSellers.value = bestSellers.value.length > 0
  } catch (error) {
    console.error('Products fetch error:', error)
  }
}

onMounted(() => {
  fetchProducts()
})
</script>

<style scoped>
.product-image {
  width: 100%;
  height: 300px; /* Adjust this if needed */
  object-fit: cover;
  border-radius: 25px; /* Increased for softer edges */
  transition: transform 0.2s ease-in-out;
}

.product-image:hover {
  transform: scale(1.05);
}

.backdrop-blur-md {
  backdrop-filter: blur(12px);
}

.modal-image {
  max-width: 80%; /* Ensure the modal image fits well on the screen */
  max-height: 80vh; /* Make sure it doesn't exceed the viewport height */
  object-fit: contain;
  border-radius: 25px; /* Increased for softer edges */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

#intro {
  background: url('../assets/intro.jpg');
  background-position: center;
  background-size: 100%;
}
</style>
