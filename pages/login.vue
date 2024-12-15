<template>
  <div class="login-bg flex h-screen w-screen items-center justify-center">
    <div class="login-box test flex flex-col rounded-xl bg-white px-12 py-20">
      <div class="mb-2 text-center text-3xl font-bold tracking-wide text-gray-800">我的夢想家</div>
      <p class="mb-14 text-center text-slate-600">後臺系統</p>
      <input
        type="text"
        class="zrt-normal-input mb-5 rounded-md border border-gray-300 p-2 text-gray-700"
        placeholder="帳號"
        :value="account"
      />
      <input
        type="password"
        class="zrt-normal-input mb-10 rounded-md border border-gray-300 p-2 text-gray-700"
        placeholder="密碼"
        :value="password"
      />

      <button class="zrt-btn py-3">登入</button>
    </div>
  </div>
</template>

<script setup>
const account = ref('')
const password = ref('')
</script>

<style lang="scss" scoped>
.login-bg {
  background: linear-gradient(45deg, white, $pri);
}

.login-box {
  background-color: $bgc;
  box-shadow: 0 0 10px 2px $pri;
  transition: 0.4s;
  animation: fading-appear 1s;
  &:hover {
    box-shadow: 0 0 15px 5px $pri;
  }
}
</style>
