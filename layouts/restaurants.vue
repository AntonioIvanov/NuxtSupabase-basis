<template>
  <div class="bg-white h-screen w-full flex flex-col justify-center items-center mx-auto ">
    <NuxtLink class="px-6 shadow-xl py-2 rounded-full text-white bg-primary hover:opacity-40" to="/">Welcome to Nuxt</NuxtLink>
    <div class="w-2/3">
      <slot />
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>