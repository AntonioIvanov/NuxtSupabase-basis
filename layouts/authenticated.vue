<template>
  <div>
    <!-- <AppHeader /> -->
    <PageContainer>
      <div class="min-h-screen pt-12 overflow-x-hidden h-auto w-ful px-5 md:px-6">
        <AppHeader />
        <div class="w-auto py-2 md:py-0 overflow-auto md:w-ful flex md:justify-center space-x-4">
          <NuxtLink class="text-gray-400" to="/list">Restaurant</NuxtLink>
          <NuxtLink class="text-gray-400" to="/create">Upsert/insert</NuxtLink>
          <NuxtLink class="text-gray-400" to="/">update</NuxtLink>
          <NuxtLink class="text-gray-400" to="/">delete</NuxtLink>
          <NuxtLink class="text-gray-400 whitespace-nowrap" to="/">Typescript (config)</NuxtLink>
        </div>
        <slot />
      </div>
    </PageContainer>
    <p class="w-fit mx-auto mb-4 pt-8 text-gray-400">
      &lt;/&gt; & Crafted with 🧡 Antonio Ivanov
    </p>
  </div>
</template>

<script setup>
</script>
