<template>
  <div class="h-screen w-full pt-12 px-5 md:px-6">
    <p class="text-primary text-6xl">Restaurants near you!</p>
    <!-- <button @click="logout">logout</button> -->
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})
useHead({
  title: '@NS - Register👀'
})
const client = useSupabaseAuthClient()
const router = useRouter()

const logout = async () => {
  await client.auth.signOut()
  router.push('/')
}
</script>

<style scoped>

</style>