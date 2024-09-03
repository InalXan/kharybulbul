<script setup>
import NavigationComponent from '@/components/NavigationComponent.vue'
</script>
<template>
  <div id="container">
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97268.22983987497!2d49.69060319726562!3d40.37267940000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d71ee68c54b%3A0x16fdc738277e4355!2zWGFyxLEgQsO8bGLDvGwgQ2hvY29sYXRlIEhvdXNl!5e0!3m2!1saz!2saz!4v1724196793680!5m2!1saz!2saz"
          style=""
        ></iframe>
      </div>
      <div class="container px-5 py-24 mx-auto flex">
        <div
          class="lg:w-1/3 md:w-1/2 bg-second rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
        >
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Əlaqə</h2>
          <p class="leading-relaxed mb-5 text-gray-600">
            İstək və ya təkliflərinizi buradan göndərə bilərsiniz
          </p>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-shadow">Ad Soyad</label>
            <input
              type="text"
              id="email"
              name="name"
              placeholder="Anar Rahimli"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="number" class="leading-7 text-sm text-shadow">Nömrə</label>
            <input
              type="number"
              id="email"
              name="number"
              placeholder="055 XXX - XX - XX"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-shadow">Mesaj</label>
            <textarea
              id="message"
              name="message"
              placeholder="Mesajlar"
              class="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            class="text-second bg-primary py-2 px-6 focus:outline-none hover:bg-second hover:text-primary hover:border-primary border-2 transition-all rounded text-lg"
          >
            Button
          </button>
          <p class="text-xs text-gray-500 mt-3">
            Göndərdiyiniz istək və ya təkliflərinizə 5 iş günü müddətində baxılacaq.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
