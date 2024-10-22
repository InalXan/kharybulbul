<script setup>
import {ref, onMounted} from 'vue'
import NavigationComponent from '@/components/general_components/NavigationComponent.vue'
import FooterComponent from '@/components/general_components/FooterComponent.vue'
import { fetchAbout } from '@/api';
const aboutImage = ref([])

onMounted (async() => {
  try{
    const data = await fetchAbout()
    aboutImage.value = data
    console.log(data);
  }
  catch (error){
    console.error('Error loading chocolates:', error);
  }
})

</script>
<template>
  <NavigationComponent />
  <!-- about  -->
  <div class="py-16 bg-white">
    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:5/12 lg:w-5/12">
          <img :src="aboutImage.img" alt="image" loading="lazy" width="" height="" />
        </div>
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-gray-900 font-updock font-bold md:text-4xl">
            Xarıbülbül Haqqında
          </h2>
          <p class="mt-6 text-gray-600">
            {{aboutImage.title }}
          </p>
          <p class="mt-4 text-gray-600">
            {{ aboutImage.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- footer  -->
  <FooterComponent />
</template>
