<template>
  <div class="h-screen w-full pt-12 px-5 md:px-6">
    <p class="text-primary text-6xl">Welcome to the show</p>
    <pre>{{user.user_metadata.type}}</pre>
    <button @click="logout">logout</button>
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
const { data: { user } } = await client.auth.getUser()

const logout = async () => {
  await client.auth.signOut()
  console.log('user logout');
}
</script>

<style scoped>

</style>