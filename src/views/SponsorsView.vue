<script setup>
import NavigationComponent from '@/components/NavigationComponent.vue'
</script>
<template>
  <div id="container" class="w-full h-full">
    <NavigationComponent />
    <div
      id="header"
      class="w-full p-3 m-3 text-4xl text-thirty font-bold flex justify-center items-center"
    >
      <div class="w-28 h-1 m-5 bg-thirty"></div>
      <div>
        <h1>Tərəfdaşlarımız</h1>
      </div>
      <div class="w-28 h-1 m-5 bg-thirty"></div>
    </div>
    <div id="sponsors" class="flex justify-around flex-wrap wrap gap-2">
      <div>
        <img
          src="https://source.banks.az/companies/1HEjwcwSB4BhDYib-vnO/original.png"
          class="w-64"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://imgs.search.brave.com/pu2TdKjAG8PoSOUkDXDNRtxisBPj19agC_VPrupelXs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0EvYXplcmJh/eWNhbi1nZW5jbGVy/LXZlLWlkbWFuLW5h/emlybGl5aS1sb2dv/LTgxQkUwNDBFODIt/c2Vla2xvZ28uY29t/LnBuZw"
          class="w-64"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://imgs.search.brave.com/C_8_acBVquP2ljMg2N4VFpg8XHm-jqpt38A-rM59HHI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzQ4Lzc5LzU2/LzM2MF9GXzU0ODc5/NTYxN19NYzJ2NFlY/MWdDUjdVQ21KREJN/QWpVbWlVZlZ1SktI/Zi5qcGc"
          class="w-64"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
