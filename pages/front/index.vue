<script setup lang="ts">
import Header from '../../components/front/Header.vue'
import Footer from '../../components/front/Footer.vue'
import ProductCard from '../../components/front/ProductCard.vue'

import About from '../../pages/front/about.vue'
</script>

<template>
  <div class="border-b border-[#DFE4EA]">
    <Header />
  </div>
  <div class="mx-5 lg:mx-[100px]">
    <div class="max-w-screen-xl mx-auto">
      <div class="mb-9">
        <h2 class="text-3xl font-medium leading-[38px] mb-[30px]">單堂體驗課程</h2>
        <ProductCard />
      </div>
      <div class="mb-9">
        <h2 class="text-3xl font-medium leading-[38px] mb-[30px]">系統培訓課程</h2>
        <ProductCard />
      </div>
      <div class="mb-9">
        <h2 class="text-3xl font-medium leading-[38px] mb-[30px]">你可能適合</h2>
        <ProductCard />
      </div>
      <div class="mb-9 text-Primary-Text">
        <About />
      </div>
    </div>
  </div>
  <div class="bg-Secondary-Blue text-white">
    <Footer />
  </div>
</template>
