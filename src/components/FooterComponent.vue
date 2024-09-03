<template>
  <!-- next section start  -->
  <div class="w-full bg-second p-5 flex flex-wrap justify-around min-h-[40vh]">
    <div class="flex items-center justify-center">
      <div>
        <div>
          <h1 class="font-extrabold text-5xl text-primary mx-12">
            <img src="../assets/logo.jpg" class="w-24" alt="" />
          </h1>
          <p class="text-primary w-full max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatum minima
            obcaecati recusandae officiis dicta dolore, libero veniam porro incidunt delectus
            reiciendis, cum odit quaerat illum deserunt cupiditate error tempore.
          </p>
        </div>
        <div class="text-primary my-12">
          <ul class="flex flex-wrap">
            <li class="border-r-2 border-primary p-1"><a href="/">Ana Səhifə</a></li>
            <li class="border-r-2 border-primary p-1">
              <a href="/musicbox">Musiqi Qutuları</a>
            </li>
            <li class="border-r-2 border-primary p-1">
              <a href="/chocolate">Şokoladlar </a>
            </li>
            <li class="border-r-2 border-primary p-1">
              <a href="/about">Haqqımızda</a>
            </li>
            <li class="border-r-2 border-primary p-1">
              <a href="/korporativ">Korporativ</a>
            </li>
            <li class="border-r-2 border-primary p-1">
              <a href="./parliament.html">Əlaqə</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-center items-center">
      <h1 class="text-primary text-3xl font-bold">Əlaqə</h1>
      <form action="" class="flex flex-col justify-center">
        <input
          type="text"
          class="p-2 m-3 w-full max-w-[500px] border border-primary"
          placeholder="Your Name"
        />
        <input
          type="email"
          class="p-2 m-3 w-full max-w-[500px] border border-primary"
          placeholder="Your Name"
        />
        <textarea
          name=""
          class="h-[15vh] m-3 p-2 w-full max-w-[500px] border border-primary"
          placeholder="Your Message"
          id=""
        ></textarea>
        <input
          type="button"
          value="Send"
          class="p-2 m-3 w-full max-w-[500px] bg-primary text-second border border-primary"
        />
      </form>
    </div>
  </div>
  <!-- next section end  -->
</template>
