<template>
  <section class="flex flex-col md:flex-row h-screen items-center">
    <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <img
        src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        class="w-full h-full object-cover"
      />
    </div>

    <div
      class="bg-second w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center"
    >
      <div class="w-full h-100">
        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
          Admin panel hesabınıza daxil olun
        </h1>

        <form class="mt-6" action="#" method="POST">
          <div>
            <label class="block text-gray-700">* Email</label>
            <input
              type="email"
              name=""
              id=""
              placeholder="example@example.com"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autofocus
              required
            />
          </div>

          <div class="mt-4">
            <label class="block text-gray-700">* Şifrə</label>
            <input
              type="password"
              name=""
              id=""
              placeholder="***********"
              minlength="6"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            class="w-full block bg-primary hover:text-primary hover:bg-second focus:bg-primary text-second font-semibold rounded-lg px-4 py-3 mt-6"
          >
            Giriş Et
          </button>
        </form>

        <hr class="my-6 border-gray-300 w-full" />
      </div>
    </div>
  </section>
</template>
