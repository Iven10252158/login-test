<script setup lang='ts'>
import data from '@/data/data.json'
definePageMeta({
  middleware: ['auth']
})

// 模擬 login 結束後 進到 /admin，再由 admin 依照權限判斷該導入哪個頁面
onMounted(() => {
  // 不太知道這段是不是可以直接放進 middleware
  if (data.permission === 'admin') {
    navigateTo('/admin/coaches')
  } else if (data.permission === 'coatch') {
    navigateTo('/admin/videos')
  }
})
</script>

<template>
  <section>
    Hello Admin
    <NuxtPage />
  </section>
</template>

<style scoped>
</style>
