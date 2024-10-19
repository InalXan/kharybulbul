<script>
import { ref, onMounted } from 'vue'
import { getProfile, contactInbox } from '@/api.js'
import AdminNavigationComponent from '@/components/admin_components/AdminNavigationComponent.vue'

export default {
  components: {
    AdminNavigationComponent
  },
  setup() {
    const profile = ref({})
    const message = ref({})
    const loading = ref(true)
    const error = ref(null)

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
    const fetchContact = async () => {
      try {
        const response = await contactInbox()
        message.value = response.data
      } catch (err) {
        error.value = 'message bilgilerini alırken bir hata oluştu.'
        console.error('message bilgilerini getirme hatası:', err)
      } finally {
        loading.value = false
      }
    }

    onMounted(fetchProfile)
    onMounted(fetchContact)
    return {
      profile,
      message,
      loading,
      error
    }
  }
}
</script>

<template>
  <AdminNavigationComponent />
  <!-- main content page -->
  <div class="overflow-y-auto sm:p-0 pt-4 pr-4 pb-20 pl-4 bg-second">
    <div class="flex justify-center items-end text-center sm:block">
      <div class="bg-second transition-opacity bg-opacity-75"></div>
      <div
        class="inline-block text-left bg-primary rounded-lg overflow-hidden align-bottom transition-all transform shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full"
      >
        <div class="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
          <div class="grid grid-cols-1">
            <div class="mt-4 mr-auto mb-4 ml-auto bg-primary max-w-lg">
              <div class="flex flex-col items-center pt-6 pr-6 pb-6 pl-6">
                <img
                  src="../../assets/profile.png"
                  class="flex-shrink-0 object-cover object-center btn- flex w-16 h-16 mr-auto -mb-8 ml-auto rounded-full shadow-xl"
                />
                <p
                  class="mt-8 text-2xl font-semibold leading-none text-second tracking-tighter lg:text-3xl"
                >
                  {{ profile.fullname }}
                </p>
                <div class="mt-3 text-base leading-relaxed text-center text-gray-200">
                  <div class="">
                    <h1>Email: {{ profile.email }}</h1>
                  </div>
                  <div class="">
                    <h1>Mobil Nömrə {{ profile.number }}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
