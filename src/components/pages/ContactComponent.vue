<script setup>
import NavigationComponent from "../general_components/NavigationComponent.vue";
</script>
<template>
  <NavigationComponent />
  <section class="text-gray-600 body-font relative">
    <div class="absolute inset-0 bg-shadow">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style=""
      ></iframe>
    </div>
    <div class="container px-5 py-24 mx-auto flex">
      <div
        class="lg:w-1/3 md:w-1/2 bg-second rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
      >
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Elaqe</h2>
        <p class="leading-relaxed mb-5 text-gray-600">Bize mesaj gonderin</p>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-shadow"
            >Ad Soyad</label
          >
          <input
            type="text"
            id="email"
            name="name"
            placeholder="Anar Rahimli"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="number" class="leading-7 text-sm text-shadow"
            >Nömrə</label
          >
          <input
            type="number"
            id="email"
            name="number"
            placeholder="055 XXX - XX - XX"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-shadow"
            >Mesaj</label
          >
          <textarea
            id="message"
            name="message"
            placeholder="Mesajlar"
            class="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button
          class="text-second bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-second hover:text-primary hover:border-primary border-2 transition-all rounded text-lg"
        >
          Button
        </button>
        <p class="text-xs text-gray-500 mt-3">
          Gonderdiyiniz mesajlara 5 is gunu erzinde baxilacaq
        </p>
      </div>
    </div>
  </section>
</template>
