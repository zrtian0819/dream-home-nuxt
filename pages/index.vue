<template>
  <div class="h-dvh flex object-cover items-center justify-center">
    <div
      class="rounded-xl bg-white max-w-[500px] py-8 px-10 relative bg-opacity-80 backdrop-blur-md flex flex-col justify-center items-center"
    >
      <House class="size-10" />
      <h1
        class="text-neutral-800 text-center text-5xl font-bold tracking-wider transition mt-5"
      >
        {{ captionTextList[0].chi }}
      </h1>
      <h2 class="mt-2 self-start">{{ captionTextList[0].eng }}</h2>
      <button class="zrt-btn inline-block rounded-full absolute self-end">
        <MoveRight class="size-8" />
      </button>
    </div>

    <img
      class="object-cover w-full h-full absolute -z-10 transition"
      src="public/img/dreamHome.webp"
      alt=""
    />
  </div>
  <!-- <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <div class="text-6xl font-semibold text-gray-800">這裡是首頁</div>
    </div>
    <div class="my-4 flex flex-col items-center space-x-4">
      <nuxt-link to="/login" class="text-4xl text-gray-700">前往登入</nuxt-link>
    </div>
  </div> -->

  <Footer />
</template>

<script setup lang="ts">
import { MoveRight, House } from 'lucide-vue-next'

const captionTextList = [
  { chi: '您在找房子嗎?', eng: 'Are you looking for a house?' },
]
</script>

<style lang="scss">
// .bgAnimation {
// }
</style>
