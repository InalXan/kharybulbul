<script setup>
import { ref, onMounted } from "vue";
import NavigationComponent from "../general_components/NavigationComponent.vue";
import FooterComponent from "../general_components/FooterComponent.vue";

const products = [
  {
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Divan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Yataq",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Kreslo",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532372576444-dda954194ad0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Oturacaq",
  },
  {
    image:
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Kuxna Masa Desti",
  }, //dd
  {
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Divan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Yataq",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Kreslo",
  },
];
</script>

<template>
  <!-- intro start  -->
  <div
    id="container"
    class="bg-second text-gray-600 work-sans leading-normal text-base tracking-normal"
  >
    <NavigationComponent />

    <div class="carousel relative container mx-auto" style="max-width: 1600px">
      <div class="carousel-inner relative overflow-hidden w-full">
        <!--Slide 1-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden=""
          checked="checked"
        />
        <div class="carousel-item absolute opacity-0" style="height: 50vh">
          <div
            class="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
            style="
              background-image: url(&quot;https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&quot;);
            "
          >
            <div class="container mx-auto">
              <div
                class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide"
              >
                <p class="text-second font-bold text-2xl my-4">
                  İnteryerinizi daha minimalist & müasir edin
                </p>
                <RouterLink
                  class="text-xl inline-block transition-all no-underline border-b border-gray-600 leading-relaxed text-primary font-bold hover:text-second hover:border-black"
                  to="/contact"
                  >Sifariş Ver</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
        <label
          for="carousel-1"
          class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >‹</label
        >
        <label
          for="carousel-3"
          class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >›</label
        >

        <!--Slide 3-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div class="carousel-item absolute opacity-0" style="height: 50vh">
          <div
            class="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom"
            style="
              background-image: url(&quot;https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&quot;);
            "
          >
            <div class="container mx-auto">
              <div
                class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide"
              >
                <p class="text-second font-bold text-2xl my-4">
                  Anproduction keyfiyyətin ünvanı
                </p>
                <RouterLink
                  class="text-xl font-bold inline-block no-underline border-b border-primary text-primary leading-relaxed hover:text-second hover:border-second"
                  to="/about"
                  >Haqqımızda</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
        <label
          for="carousel-3"
          class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >‹</label
        >
        <label
          for="carousel-1"
          class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >›</label
        >

        <!-- Add additional indicators for each slide-->
        <ol class="carousel-indicators">
          <li class="inline-block mr-3">
            <label
              for="carousel-1"
              class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
              >•</label
            >
          </li>
          <li class="inline-block mr-3">
            <label
              for="carousel-2"
              class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
              >•</label
            >
          </li>
        </ol>
      </div>
    </div>

    <section class="bg-white py-8">
      <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <nav id="store" class="w-full z-30 top-0 px-6 py-1">
          <div
            class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3"
          >
            <a
              class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              href="#"
            >
              Məhsullar
            </a>

            <div class="flex items-center" id="store-nav-content">
              <a
                class="pl-3 inline-block no-underline hover:text-black"
                href="#"
              >
                <svg
                  class="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                </svg>
              </a>

              <a
                class="pl-3 inline-block no-underline hover:text-black"
                href="#"
              >
                <svg
                  class="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </nav>

        <div
          v-for="product in products"
          :key="product"
          class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
        >
          <a href="#">
            <img class="hover:grow hover:shadow-lg" :src="product.image" />
            <div class="pt-3 flex items-center justify-between">
              <p class="">{{ product.name }}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section>
      <FooterComponent />
    </section>
  </div>
  <!-- intro end  -->
</template>

<style scoped>
.hover\:grow {
  transition: all 0.3s;
  transform: scale(1);
}

.hover\:grow:hover {
  transform: scale(1.02);
}

.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}

.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #000;
  /*Set to match the Tailwind colour you want the active one to be */
}
</style>
