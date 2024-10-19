<script setup>
import { ref } from 'vue'
import { addCategory, fetchCategories, deleteCategory, updateCategory } from '@/api'
import AdminNavigationComponent from '@/components/admin_components/AdminNavigationComponent.vue'

// Reactive references
const categories = ref([])
const categoryName = ref('')
const categoryImage = ref(null)

// Fetch categories on component mount
const fetchAllCategories = async () => {
  try {
    const response = await fetchCategories()
    categories.value = response
  } catch (error) {
    console.error('Error fetching categories:', error)
  }
}

// Handle file input change
const handleFileChange = (event) => {
  categoryImage.value = event.target.files[0]
}

// Handle adding a new category
const handleAddCategory = async () => {
  if (!categoryName.value || !categoryImage.value) {
    console.error('Both category name and image are required.')
    return
  }

  try {
    const formData = new FormData()
    formData.append('name', categoryName.value)
    formData.append('category_image', categoryImage.value)

    await addCategory(formData)
    await fetchAllCategories() // Refresh category list
    // Clear inputs after successful addition
    categoryName.value = ''
    categoryImage.value = null
  } catch (error) {
    console.error('Error adding category:', error)
  }
}

// Handle deleting a category
const handleDeleteCategory = async (id) => {
  try {
    await deleteCategory(id)
    await fetchAllCategories()
  } catch (error) {
    console.error('Error deleting category:', error)
  }
}

fetchAllCategories()
</script>

<template>
  <AdminNavigationComponent />
  <div class="bg-gray-100">
    <!-- Header and Navigation -->
    <div class="header my-3 h-12 px-10 flex items-center justify-between">
      <h1 class="font-medium text-2xl">Kategoriya</h1>
    </div>

    <!-- Add Category Form -->
    <div class="flex flex-col mx-3 mt-6 lg:flex-row">
      <div class="w-full lg:w-1/3 m-1">
        <form @submit.prevent="handleAddCategory" class="w-full bg-second shadow-md p-6">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-6">
              <label class="block uppercase text-dark text-sm font-bold mb-2">Başlıq</label>
              <input
                v-model="categoryName"
                class="block w-full bg-white text-primary font-medium border rounded-lg py-3 px-3"
                type="text"
                placeholder="Başlıq"
                required
              />
            </div>
            <div class="w-full px-3 mb-6">
              <label
                class="cursor-pointer flex w-full max-w-lg flex-col items-center border-2 border-dashed p-6"
              >
                <input type="file" class="hidden" @change="handleFileChange" accept="image/*" />
                <span class="text-xl">Category Image</span>
              </label>
            </div>
            <div class="w-full px-3 mb-6">
              <button class="w-full bg-primary text-gray-100 font-bold border rounded-lg py-3 px-3">
                Add Category
              </button>
            </div>
          </div>
        </form>
      </div>

      <!-- Category List -->
      <div class="w-full lg:w-2/3 m-1 bg-white shadow-lg text-lg rounded-sm border border-gray-200">
        <div class="overflow-x-auto rounded-lg p-3">
          <table class="table-auto w-full">
            <thead class="text-sm font-semibold uppercase text-gray-800 bg-gray-50">
              <tr>
                <th>#</th>
                <th>Category Image</th>
                <th>Category Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(category, index) in categories" :key="category._id">
                <td>{{ index + 1 }}</td>
                <td><img :src="category.imageUrl" alt="Category Image" class="h-8 w-8" /></td>
                <td>{{ category.name }}</td>
                <td>
                  <button @click="handleDeleteCategory(category._id)" class="text-red-600">
                    Delete
                  </button>

                  <button
                    @click="updateCategory(category._id)"
                    class="rounded-md hover:bg-primary text-primary p-2 flex justify-between items-center"
                  >
                    Update
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
