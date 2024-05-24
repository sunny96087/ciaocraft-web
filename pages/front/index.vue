<script setup>
import Header from '../../components/front/header.vue'
import Footer from '../../components/front/footer.vue'

import About from '../../pages/front/about.vue'
</script>

<template>
  <div class="border-b border-[#DFE4EA]">
    <Header />
  </div>
  <div class="mb-9 text-Primary-Text">
    <About />
  </div>
  <div class="bg-Secondary-Blue text-white">
    <Footer />
  </div>
</template>
