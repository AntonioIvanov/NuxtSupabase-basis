<template>
  <div class="h-screen overflow-y-hidden w-full pt-12 md:pt-0 px-4 lg:px-8 flex flex-col md:justify-center items-center">
    <p class="text-4xl md:text-6xl text-primary font-bold pb-4 mt-2">@Nuxt/Supabase</p>
    <AuthBox />
  </div>


</template>

<script setup lang="ts"> 
const user = useSupabaseUser()
const router = useRouter()


watchEffect(() => {
  if (user.value) {
    router.push('/list')
  }
})
</script>

<style scoped>

</style>

