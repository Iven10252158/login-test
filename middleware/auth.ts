import data from '@/data/data.json'
export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to)
  console.log(from)
  console.log(data)

  // 主要是這段有問題，因為會經過 /admin 所以會產生無權回圈
  // if (data.permissions !== 'admin' && to.path === '/admin/coaches') {
  //   console.log('123')

  //   return navigateTo('/admin/videos')
  // }
})
