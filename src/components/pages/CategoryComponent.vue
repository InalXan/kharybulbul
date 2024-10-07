<script setup>
import { ref, onMounted } from "vue";

const cards = [
  {
    cardName: "Qonaq Otağı",
    link: "/furnitures",
    image:
      "https://images.unsplash.com/photo-1680503397107-475907e4f3e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    cardName: "Reşotqalar",
    link: "/ironworks",
    image:
      "https://i.ytimg.com/vi/EExJb0JA5K0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBQT2avYpM8DgARQ4zB3x0L18xGmg",
  },
  {
    cardName: "Pilləkən Tutacaqları",
    link: "/ironworks",
    image:
      "https://images.unsplash.com/photo-1490938803480-8fcb5cbb0fa5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    cardName: "Çətirlər",
    link: "/furnitures",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzkdlQ4tKrrh6P4S0YvJCYR1_hpPkwmBepzw&s",
  },
  {
    cardName: "Həyət Mebelləri",
    link: "/ironworks",
    image:
      "https://images.unsplash.com/photo-1590931803077-ae8116f15edc?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
</script>
<template>
  <div id="container" class="w-full min-h-[100vh]">
    <div
      id="cards"
      class="w-full flex justify-center items-center flex-wrap min-h-[100vh]"
    >
      <div
        id="overlayer"
        class="absolute w-full min-h-[100vh] top-0 bg-shadow"
      ></div>
      <div
        v-for="card in cards"
        :key="card"
        class="w-full z-10 max-w-[350px] m-3 p-3 flex justify-center items-center border-2 border-[#fff] hover:border-shadow transition-all"
      >
        <RouterLink class="font-bold text-xl text-second" :to="card.link">
          <!-- ticket -->
          <div id="tick" class="z-50 w-full flex justify-between items-center">
            {{ card.cardName }}

            <img src="../../assets/img/logo.jpg" class="w-16 p-2" alt="" />
          </div>
          <img
            :src="card.image"
            class="relative w-full h-full border-2 border-[#fff] hover:border-shadow transition-all"
            alt=""
          />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
#container {
  background: url("../../assets/img/iron-texture.jpg");
  background-size: cover;
  background-position: center;
}
</style>
