<script>
export default {
  data() {
    return {
      isMenuOpen: true
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<template>
  <div class="w-full">
    <div class="w-full h-[5vh] bg-primary text-center flex items-center justify-center">
      <RouterLink to="/contact" class="text-second">Satın almaq üçün klikləyin !</RouterLink>
    </div>
    <div class="flex justify-around items-center">
      <div>
        <RouterLink to="/"
          ><img src="../assets/logo.jpg" class="w-[100px] m-2" alt=""
        /></RouterLink>
      </div>
      <div>
        <ul class="flex sm:hidden">
          <li class="text-2xl text-primary" @click="toggleMenu">
            <ion-icon name="menu"></ion-icon>
          </li>
        </ul>

        <ul
          class="flex flex-col sm:flex-row sm:relative absolute bg-second text-thirty p-5 -mx-16"
          v-if="isMenuOpen"
        >
          <li class="m-1">
            <RouterLink class="p-1 hover:underline" to="/">Ana Səhifə</RouterLink>
          </li>
          <li class="m-1">
            <RouterLink class="p-1 hover:underline" to="/korporativ">Korporativ</RouterLink>
          </li>
          <li class="m-1">
            <RouterLink class="p-1 hover:underline" to="/musicbox">Musiqili Qutular</RouterLink>
          </li>
          <li class="m-1">
            <RouterLink class="p-1 hover:underline" to="/chocolate">Şokoladlar</RouterLink>
          </li>
          <li class="m-1">
            <RouterLink class="p-1 hover:underline" to="/about">Haqqımızda</RouterLink>
          </li>
          <li class="m-1">
            <RouterLink class="p-1 hover:underline" to="/contact">Əlaqə</RouterLink>
          </li>
        </ul>
      </div>
      <div>
        <ul class="flex">
          <li>
            <a class="m-1 p-1" href="https://www.instagram.com/kharybulbul_chocolate/"
              ><ion-icon name="logo-instagram"></ion-icon
            ></a>
          </li>
          <li>
            <a class="m-1 p-1" href="/"><ion-icon name="logo-facebook"></ion-icon></a>
          </li>
          <li>
            <a class="m-1 p-1" href="/"><ion-icon name="logo-whatsapp"></ion-icon></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
