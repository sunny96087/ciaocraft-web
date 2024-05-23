<template>
  <div class="container mx-auto">
    <div class="mx-9 md:mx-[100px]">
      <ul class="flex justify-between items-center my-[30px]">
        <li>
          <h1>
            <a
              href="#"
              class="bg-[url('/Logo_Img.svg')] block w-40 h-10 indent-[115%] overflow-hidden whitespace-nowrap"
              >Ciao!Craft</a
            >
          </h1>
        </li>
        <li class="hidden md:block">
          <ul class="flex items-center">
            <li class="text-Primary-Orange pr-6">
              <a href="#" class="py-2 px-6 hover:text-Primary-light">我要開課</a>
            </li>
            <li class="text-white pr-6">
              <button class="bg-Primary-Orange hover:bg-Primary-light py-2 px-6">登入/註冊</button>
            </li>
            <li class="pr-6">
              <a href="#"><img src="/Button.svg" alt="我的收藏" /></a>
            </li>
            <li>
              <a href="#"><img src="/Button(money).svg" alt="關於我們/如何累積點數" /></a>
            </li>
          </ul>
        </li>
        <li class="md:hidden">
          <ul class="flex items-center">
            <li class="pr-6">
              <a href="#"><img src="/Button.svg" alt="我的收藏" /></a>
            </li>
            <li class="active:cursor-pointer" @click="toggleMenu">
              <a href="#" class="relative"><img src="/Button(ham).svg" alt="側邊漢堡選單" /></a>
            </li>
          </ul>
        </li>
      </ul>
      <!-- 漢堡選單 -->
      <!-- <ul
      :class="[
        'absolute w-5/6 transition-max-height overflow-hidden mt-5 mb-6 z-50',
        { 'max-h-0': !isMenuOpen, 'max-h-full': isMenuOpen }
      ]"
    >
      <li class="border-b border-[#AAAAAA]">
        <a href="#" class="block p-2 pb-5 pl-5">登入/註冊</a>
      </li>
      <li class="mt-3"><a href="#" class="block py-2 pl-5">我要開課</a></li>
      <li><a href="#" class="block py-2 pl-5">如何累積點數</a></li>
    </ul> -->
    </div>
  </div>
  <!-- 漢堡選單 -->
  <div
    :class="[
      'absolute w-screen transition-max-height overflow-hidden mt-5 mb-6 z-50',
      { 'max-h-0': !isMenuOpen, 'max-h-full': isMenuOpen }
    ]"
  >
    <li class="border-b border-[#AAAAAA]">
      <a href="#" class="block p-2 pb-5 pl-5">登入/註冊</a>
    </li>
    <li class="mt-3"><a href="#" class="block py-2 pl-5">我要開課</a></li>
    <li><a href="#" class="block py-2 pl-5">如何累積點數</a></li>
  </div>
</template>

<script setup lang="ts">
// 使用 ref 選取 dom 元素
import { ref } from 'vue'

// 定義 isMenuOpen 為布林類型的 ref
// 使用 ref 管理漢堡選單的顯示狀態
const isMenuOpen = ref<boolean>(false)

// 定義 toggleMenu 函數，其返回類型為 void
// 切換漢堡選單顯示狀態
const toggleMenu = (): void => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<!-- <script setup>
// 使用 ref 選取 dom 元素
import { ref } from 'vue'

// 使用 ref 管理漢堡選單的顯示狀態
const isMenuOpen = ref(false)

// 切換漢堡選單顯示狀態
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script> -->

<style scoped>
/* 漸變效果 */
.transition-max-height {
  transition: max-height 0.5s ease-in-out;
}
</style>
