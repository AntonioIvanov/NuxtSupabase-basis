<template>
  <div class="h-screen w-full pt-12 px-5 md:px-6">
    <p class="text-primary text-6xl">Restaurants near you!</p>
    <div class="flex flex-col md:flex-row pt-6">
      <!-- Text Search with Supabase -->
      <input type="text" class="w-full md:w-1/3 bg-transparent border border-primary rounded-lg py-1 px-4 text-black dark:text-white focus:outline-none" placeholder="Suhi....">

      <!-- This should only be available if the profile is created with extra metadata -->
      <div class="flex mt-3 md:mt-0 md:ml-4 space-x-4">
        <BaseButton :text="'+ Add Restaurant'" />
        <BaseButton @click="tester" :text="'Filter'" />
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 grid-flow-row pt-6 pb-12">
      <RestaurantCard v-for="d in 5" />
    </div>
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
function tester() {
  console.log('this works')
}
</script>