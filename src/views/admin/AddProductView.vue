<script setup>
import { ref } from 'vue'
import { api } from '@/api'

// Ürünleri tutan reaktif değişken
const products = ref([])

// Ürünleri fetch eden fonksiyon
const fetchProducts = async () => {
  try {
    const response = await api.get('/admin/product')
    products.value = response.data
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}

// Ürünü silen fonksiyon
const deleteProduct = async (id) => {
  try {
    await api.delete(`/admin/product/${id}`)
    products.value = products.value.filter((product) => product._id !== id)
  } catch (error) {
    console.error('Error deleting product:', error)
  }
}

// Bileşen yüklendiğinde ürünleri çek
fetchProducts()

// Form alanları için reaktif değişkenler
const categoryName = ref('')
const categoryDescription = ref('')
const categoryImage = ref(null)

// Formu submit eden fonksiyon
const submitForm = async () => {
  try {
    const formData = new FormData()
    formData.append('name', categoryName.value)
    formData.append('description', categoryDescription.value)
    formData.append('categoryImage', categoryImage.value)

    await api.post('/admin/category', formData)
    await fetchProducts() // Ürünleri güncelle
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}

// Dosya yükleme işlemi için fonksiyon
const handleFileUpload = (event) => {
  categoryImage.value = event.target.files[0]
}
</script>

<template>
  <AdminNavigationComponent />
  <div class="bg-gray-100">
    <!-- Üstteki Breadcrumb -->
    <div
      class="header bg-white h-16 px-10 py-8 border-b-2 border-gray-200 flex items-center justify-between"
    >
      <div class="flex items-center space-x-2 text-gray-400">
        <span class="text-green-700 tracking-wider font-thin text-md">
          <RouterLink to="/admin/profile">Admin</RouterLink>
        </span>
        <span>/</span>
        <span class="tracking-wide text-md">
          <span class="text-base">Məhsul Əlavə Edin</span>
        </span>
        <span>/</span>
      </div>
    </div>

    <!-- Form ve Ürün Listesi -->
    <div class="flex flex-col mx-3 mt-6 lg:flex-row">
      <!-- Form -->
      <div class="w-full lg:w-1/3 m-1">
        <form class="w-full bg-second shadow-md p-6" @submit.prevent="submitForm">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-6">
              <label class="block uppercase tracking-wide text-dark text-sm font-bold mb-2"
                >Başlıq</label
              >
              <input
                v-model="categoryName"
                class="appearance-none block w-full bg-white text-primary font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-primary"
                type="text"
                placeholder="Başlıq"
                required
              />
            </div>
            <div class="w-full px-3 mb-6">
              <textarea
                v-model="categoryDescription"
                rows="4"
                class="appearance-none block w-full bg-white text-primary font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-primary"
                placeholder="Açıqlama"
                required
              ></textarea>
            </div>

            <div class="w-full px-3 mb-8">
              <label
                class="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center justify-center rounded-xl border-2 border-dashed border-green-400 bg-white p-6 text-center"
                for="dropzone-file"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 text-green-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <h2 class="mt-4 text-xl font-medium text-gray-700 tracking-wide">Category image</h2>
                <p class="mt-2 text-gray-500 tracking-wide">
                  Upload or drag & drop your file SVG, PNG, JPG or GIF.
                </p>
                <input id="dropzone-file" type="file" class="hidden" @change="handleFileUpload" />
              </label>
            </div>

            <div class="w-full px-3 mb-6">
              <button
                class="block w-full bg-green-700 text-gray-100 font-bold rounded-lg py-3 px-3 leading-tight hover:bg-green-600"
              >
                Əlavə et
              </button>
            </div>
          </div>
        </form>
      </div>

      <!-- Ürün Listesi -->
      <div class="w-full lg:w-2/3 m-1 bg-white shadow-lg text-lg rounded-sm border border-gray-200">
        <div class="overflow-x-auto rounded-lg p-3">
          <table class="table-auto w-full">
            <thead class="text-sm font-semibold uppercase text-gray-800 bg-gray-50 mx-auto">
              <tr>
                <th>#</th>
                <th>Resim</th>
                <th>Ad</th>
                <th>Kategori</th>
                <th class="text-center">İşlem</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products" :key="product._id">
                <td>{{ index + 1 }}</td>
                <td>
                  <img
                    :src="`data:image/jpeg;base64,${product.productImage}`"
                    class="h-8 w-8 mx-auto"
                  />
                </td>
                <td>{{ product.name }}</td>
                <td>{{ product.category.name }}</td>
                <td class="text-center">
                  <div class="flex justify-center space-x-2">
                    <button class="text-green-600 hover:bg-green-100 p-2 rounded-md">Edit</button>
                    <button
                      @click="deleteProduct(product._id)"
                      class="text-red-600 hover:bg-red-100 p-2 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
