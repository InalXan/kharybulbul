<template>
  <header class="w-full">
    <!-- message header  -->
    <div
      id="navigation_menu"
      class="w-full p-2 bg-primary flex justify-center items-center text-second"
    >
      <h1 class="font-updock text-2xl">Şokolad Kafemizə Xoş Gəlmisiniz !</h1>
    </div>
    <!-- navigation bar  -->
    <div class="flex flex-wrap z-20">
      <div class="w-full">
        <nav class="relative flex flex-wrap items-center justify-between shadow-sm bg-second">
          <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div
              class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
            >
              <a
                class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase primary"
                href="#pablo"
              >
                <img src="../../assets/logo.jpg" class="w-16 h-16 rounded-full" alt="" />
              </a>
              <button
                class="text-primary cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                v-on:click="toggleNavbar()"
              >
                <ion-icon name="menu-outline"></ion-icon>
              </button>
            </div>
            <div
              v-bind:class="{ hidden: !menuShow, flex: menuShow }"
              class="lg:flex lg:flex-grow items-center"
            >
              <ul class="flex flex-col lg:flex-row list-none lg:ml-auto font-dancing font-bold">
                <li class="nav-item">
                  <RouterLink
                    class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-primary hover:opacity-75"
                    to="/"
                  >
                    Ana Səhifə
                  </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink
                    class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-primary hover:opacity-75"
                    to="/musicbox"
                  >
                    Musiqi Qutuları
                  </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink
                    class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-primary hover:opacity-75"
                    to="/chocolates"
                  >
                    Şokoladlar
                  </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink
                    class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-primary hover:opacity-75"
                    to="/Korporativ"
                  >
                    Korporativ
                  </RouterLink>
                </li>

                <li class="nav-item">
                  <RouterLink
                    class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-primary hover:opacity-75"
                    to="/about"
                  >
                    Haqqımızda
                  </RouterLink>
                </li>

                <li class="nav-item">
                  <RouterLink
                    class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-primary hover:opacity-75"
                    to="/contact"
                  >
                    Əlaqə
                  </RouterLink>
                </li>
                <li>
                  <!-- media  -->
                  <div class="text-xl flex text-dark">
                    <a href="/" class="m-1 p-1"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a href="/" class="m-1 p-1"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="/" class="m-1 p-1"><ion-icon name="logo-whatsapp"></ion-icon></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'pink-menu',
  data() {
    return {
      menuShow: false
    }
  },
  methods: {
    toggleNavbar: function () {
      this.menuShow = !this.menuShow
    }
  }
}
</script>
