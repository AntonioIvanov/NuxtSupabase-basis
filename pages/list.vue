<template>
  <div class="h-screen w-full px-5 md:px-6">
    <!-- TO DO: Cut in half all the pages to add the code on the right -->
    <p class="text-primary text-6xl">Restaurants near you!</p>
    <div class="flex flex-col md:flex-row md:items-center pt-6">
      <!-- Text Search with Supabase -->
      <div class="w-full md:w-1/3 flex items-center py-1 bg-transparent border border-primary rounded-lg pl-4 pr-1">
        <input type="text" class="flex-1 bg-transparent text-black dark:text-white focus:outline-none" placeholder="Suhi....">
        <BaseButton :text="'Search'" class="text-sm" />
      </div>

      <!-- This should only be available if the profile is created with extra metadata -->
      <div class="flex mt-3 md:mt-0 md:ml-4 space-x-4">
        <BaseButton @click="tester" :text="'Filter'" />
        <NuxtLink to="/create" class="w-fit py-1 px-4 border border-primary rounded-lg text-[#001E26] dark:text-white">+ Add</NuxtLink>
      </div>
    </div>
    <div class="w-full flex justify-center">
      <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 grid-flow-row pt-6 pb-12">
        <RestaurantCard v-for="d in 5" />
      </div>
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