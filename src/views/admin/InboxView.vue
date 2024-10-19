<script>
import { ref, onMounted } from 'vue'
import { contactInbox, deleteMessage } from '@/api.js'
import AdminNavigationComponent from '@/components/admin_components/AdminNavigationComponent.vue'

export default {
  components: {
    AdminNavigationComponent
  },
  setup() {
    const messages = ref([]) // Liste olarak başlatıyoruz
    const loading = ref(true)
    const error = ref(null)

    const fetchProfile = async () => {
      try {
        const response = await contactInbox()
        console.log('Gelen mesajlar:', response.data) // Gelen mesajları konsola yazdır
        messages.value = response.data
      } catch (err) {
        error.value = 'Mesaj bilgilerini alırken bir hata oluştu.'
        console.error('Mesaj bilgilerini getirme hatası: ', err)
      } finally {
        loading.value = false
      }
    }
    const removeMessage = async (id) => {
      console.log('Silinecek mesaj ID:', id) // Silinecek mesaj ID'sini yazdır
      try {
        const response = await deleteMessage(id)
        if (response.status === 200) {
          messages.value = messages.value.filter((message) => message.id !== id)
        } else {
          error.value = 'Mesaj silinirken beklenmedik bir hata oluştu.'
        }
      } catch (err) {
        error.value =
          'Mesaj silinirken bir hata oluştu. Hata kodu: ' +
          (err.response ? err.response.status : 'Bilinmiyor')
        console.error('Mesaj silme hatası:', err.response ? err.response.data : err)
      }
    }
    onMounted(fetchProfile)

    return {
      messages,
      removeMessage,
      loading,
      error
    }
  }
}
</script>

<template>
  <AdminNavigationComponent />
  <!-- inbox start  -->
  <div class="w-full min-h-[100vh]">
    <div id="inbox" class="w-full flex justify-center flex-col">
      <!-- message box -->
      <div
        v-for="message in messages"
        :key="message._id"
        class="w-full relative top-10 m-auto max-w-[800px] flex flex-wrap border-b shadow-md justify-evenly min-h-[10vh]"
      >
        <div class="flex justify-center items-center text-2xl">
          <ion-icon name="mail-unread-outline"></ion-icon>
        </div>
        <!-- profile photo -->
        <div id="">
          <img
            src="../../assets/profile.png"
            class="w-16 h-16 border-2 border-primary rounded-full shadow-md"
            alt=""
          />
        </div>
        <!-- message  -->
        <div class="flex flex-col">
          <h1 class="text-xl">{{ message.fullname }}</h1>
          <h1 class="text-md">{{ message.number }}</h1>
          <p class="text-sm text-dark">{{ message.message }}</p>
        </div>
        <!-- buttons -->
        <div>
          <button
            type="submit"
            @click="removeMessage(message._id)"
            class="p-3 m-2 bg-danger bg-opacity-15 text-danger text-xl border rounded-lg"
          >
            <ion-icon name="trash-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- inbox end  -->
</template>
