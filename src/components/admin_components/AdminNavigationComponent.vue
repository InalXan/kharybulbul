<template>
  <!-- header page -->
  <header class="flex w-full items-center justify-between border shadow-md bg-second p-2">
    <!-- logo -->
    <div class="flex items-center space-x-2">
      <button type="button" class="text-3xl" @click="toggleAside">
        <ion-icon name="grid-outline"></ion-icon>
      </button>
    </div>

    <!-- button profile -->
    <div>
      <button type="button" @click="toggleProfile" class="h-9 w-9 overflow-hidden rounded-full">
        <img src="../../assets/profile.png" alt="plchldr.co" />
      </button>

      <!-- dropdown profile -->
      <div
        class="absolute right-2 mt-1 w-48 divide-y divide-dark rounded-md border bg-second shadow-md"
        v-show="profileOpen"
      >
        <div class="flex items-center flex-col space-x-2 p-2">
          <img src="../../assets/profile.png" alt="plchldr.co" class="h-9 w-9 rounded-full" />
          <div class="font-medium">
            <h1>{{ profile.fullname }}</h1>
          </div>
          <div class="font-small">
            <h1>{{ profile.email }}</h1>
          </div>

          <div class="font-small">
            <h1>{{ profile.number }}</h1>
          </div>
        </div>

        <div class="flex flex-col space-y-3 p-2">
          <a href="/admin/profile" class="transition hover:text-primary">Profilim</a>
        </div>

        <div class="p-2">
          <RouterLink to="/" class="flex items-center space-x-2 transition hover:text-primary">
            <svg
              class="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <div>Çıxış</div>
          </RouterLink>
        </div>
      </div>
    </div>
  </header>

  <!-- aside -->
  <aside
    class="flex fixed w-72 flex-col space-y-2 border-r shadow-md bg-second p-2"
    style="height: 90.5vh"
    v-show="asideOpen"
  >
    <RouterLink
      to="/admin/profile"
      class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-primary hover:text-primary hover:bg-opacity-15"
    >
      <span class="text-2xl"><ion-icon name="person-outline"></ion-icon></span>
      <span>Profil</span>
    </RouterLink>

    <RouterLink
      to="/admin/about"
      class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-primary hover:text-primary hover:bg-opacity-15"
    >
      <span class="text-2xl"><ion-icon name="information-circle-outline"></ion-icon></span>
      <span>Haqqımızda</span>
    </RouterLink>
    <RouterLink
      to="/admin/category"
      class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-primary hover:text-primary hover:bg-opacity-15"
    >
      <span class="text-2xl"><ion-icon name="duplicate-outline"></ion-icon></span>
      <span>Kategoriya</span>
    </RouterLink>
    <RouterLink
      to="/admin/product"
      class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-primary hover:text-primary hover:bg-opacity-15"
    >
      <span class="text-2xl"><ion-icon name="bag-add-outline"></ion-icon></span>
      <span>Məhsul</span>
    </RouterLink>
    <RouterLink
      to="/admin/inbox"
      class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-primary hover:text-primary hover:bg-opacity-15"
    >
      <span class="text-2xl"><ion-icon name="mail-unread-outline"></ion-icon></span>
      <span>Mesaj Qutusu</span>
    </RouterLink>
  </aside>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getProfile } from '@/api.js'

export default {
  setup() {
    const profile = ref({})
    const loading = ref(true)
    const error = ref(null)

    // Menü ve profil açılış durumlarını saklamak için ref'ler oluşturuyoruz
    const profileOpen = ref(false)
    const asideOpen = ref(true)

    // Menü ve profil açma/kapatma fonksiyonları
    const toggleProfile = () => {
      profileOpen.value = !profileOpen.value
    }

    const toggleAside = () => {
      asideOpen.value = !asideOpen.value
    }
    const fetchProfile = async () => {
      try {
        const response = await getProfile()
        profile.value = response.data
      } catch (err) {
        error.value = 'Profil bilgilerini alırken bir hata oluştu.'
        console.error('Profil bilgilerini getirme hatası:', err)
      } finally {
        loading.value = false
      }
    }

    onMounted(fetchProfile)
    return {
      profileOpen,
      asideOpen,
      toggleProfile,
      toggleAside,
      profile,
      loading,
      error
    }
  }
}
</script>
