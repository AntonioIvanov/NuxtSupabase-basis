<template>
  <div class="h-screen overflow-y-hidden relative w-full md:pt-0 px-4 lg:px-8 flex flex-col md:justify-center items-center">
    <p class="group text-4xl md:text-6xl text-primary font-bold pb-4 mt-2">
      @Nuxt/<span class="text-[#001E26] dark:text-white">Supabase</span>
    </p>
    <AuthBox />
    <p class="absolute bottom-0 w-fit mx-auto mb-4 text-gray-400">
      &lt;/&gt; & Crafted with 🧡 Antonio Ivanov
    </p>
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
