<template>
  <!-- next section start  -->
  <div class="w-full bg-second p-5 flex flex-wrap shadow-md justify-around min-h-[40vh]">
    <div class="flex items-center justify-center">
      <div>
        <div>
          <img src="../../assets/logo.jpg" class="w-28" alt="" />
        </div>
        <div class="text-primary my-12">
          <ul class="flex flex-wrap">
            <li class="border-r-2 border-primary p-1">
              <RouterLink to="/">Ana Səhifə</RouterLink>
            </li>
            <li class="border-r-2 border-primary p-1">
              <RouterLink to="/musicbox">Musiqi Qutuları</RouterLink>
            </li>
            <li class="border-r-2 border-primary p-1">
              <RouterLink to="/chocolate">Şokoladlar </RouterLink>
            </li>
            <li class="border-r-2 border-primary p-1">
              <RouterLink to="/about">Haqqımızda</RouterLink>
            </li>
            <li class="border-r-2 border-primary p-1">
              <RouterLink to="/korporativ">Korporativ</RouterLink>
            </li>
            <li class="p-1">
              <RouterLink to="./parliament.html">Əlaqə</RouterLink>
            </li>
          </ul>

          <div>
            <a href="/" class="p-1"><ion-icon class="m-1" name="logo-instagram"></ion-icon></a>
            <a href="/" class="p-1"><ion-icon class="m-1" name="logo-facebook"></ion-icon></a>
            <a href="/" class="p-1"><ion-icon class="m-1" name="logo-whatsapp"></ion-icon></a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center">
      <h1 class="text-primary text-3xl font-bold">Əlaqə</h1>
      <form action="" class="flex flex-col justify-center">
        <input
          type="text"
          class="p-2 m-3 w-full rounded-md max-w-[500px] border border-primary"
          placeholder="*Ad Soyad"
        />
        <input
          type="number"
          class="p-2 m-3 w-full max-w-[500px] rounded-md border border-primary"
          placeholder="Nömrə"
        />
        <textarea
          name=""
          class="h-[15vh] m-3 p-2 w-full max-w-[500px] rounded-md border border-primary"
          placeholder="Mesaj"
          id=""
        ></textarea>
        <input
          type="button"
          value="Göndər"
          class="p-2 m-3 cursor-pointer w-full max-w-[500px] bg-primary hover:bg-second hover:text-primary transition-all rounded-md text-second border border-primary"
        />
      </form>
    </div>
  </div>
  <!-- next section end  -->
</template>
