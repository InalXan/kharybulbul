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
      <a href="#" class="text-second">Satın almaq üçün klikləyin !</a>
    </div>
    <div class="flex justify-around items-center">
      <div>
        <img src="../assets/logo.jpg" class="w-[100px] m-2" alt="" />
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
          <li class="m-1"><a class="p-1 hover:underline" href="/">Ana Səhifə</a></li>
          <li class="m-1"><a class="p-1 hover:underline" href="/korporativ">Korporativ</a></li>
          <li class="m-1"><a class="p-1 hover:underline" href="/musicbox">Musiqili Qutular</a></li>
          <li class="m-1"><a class="p-1 hover:underline" href="/chocolate">Şokoladlar</a></li>
          <li class="m-1"><a class="p-1 hover:underline" href="/about">Haqqımızda</a></li>
          <li class="m-1"><a class="p-1 hover:underline" href="/contact">Əlaqə</a></li>
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
