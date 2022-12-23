<template>
  <div class="w-full absolute top-0 left-0 flex items-center justify-between px-4 py-3 z-10">
    <div class="w-full flex items-center space-x-5 relative">
      <NuxtLink v-for="(link, i) in links" :key="i" :to="link.path" target="_blank" no-rel class="group flex items-center">
        <svg class="fill-gray-400 group-hover:fill-primary h-6 w-auto mt-0.5" width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="m38.288 10.297 1.414 1.415-14.99 14.99-1.414-1.414z"/><path d="M40 20h-2v-8h-8v-2h10zm-5 18H15c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h11v2H15c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V24h2v11c0 1.7-1.3 3-3 3z"/></svg>
        <p class="text-gray-400 group-hover:text-primary">{{ link.name }}</p>
      </NuxtLink>
      <button class="absolute right-0 mr-4" @click="toggleDark">
        <svg v-if="iconMode === 'dark'" class="fill-gray-400 hover:fill-primary" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11 2h2v3h-2V2Zm-9 9h3v2H2v-2Zm17 0h3v2h-3v-2Zm-8 8h2v3h-2v-3Zm7.621-15 1.415 1.414-2.122 2.122L16.5 6.12 18.621 4ZM16.5 17.414 17.914 16l2.122 2.121-1.415 1.415-2.121-2.122ZM6.121 16l1.415 1.414-2.122 2.122L4 18.12 6.121 16ZM4 5.414 5.414 4l2.122 2.121L6.12 7.536 4 5.414Z"/></svg>
        <svg v-else class="fill-gray-400 hover:fill-primary" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.97 3a8.02 8.02 0 0 0-4.054 7c0 4.418 3.522 8 7.866 8 1.146 0 2.236-.25 3.218-.698C18.39 19.544 15.787 21 12.849 21 7.962 21 4 16.97 4 12s3.962-9 8.849-9h.12Z" fill-rule="evenodd"/></svg>
      </button>
    </div>
  </div>
</template>


<!-- <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 8 6 3 6-3-6-3-6 3Zm6.489-4.884 7.993 4.076c.486.248.661.81.391 1.257a.97.97 0 0 1-.39.359l-7.994 4.076a1.086 1.086 0 0 1-.978 0L3.518 8.808c-.486-.248-.661-.81-.391-1.257a.97.97 0 0 1 .39-.359l7.994-4.076c.304-.155.674-.155.978 0Zm0 13.766a1.07 1.07 0 0 1-.978 0l-7.993-4.147c-.486-.252-.661-.824-.391-1.278a.976.976 0 0 1 .39-.365.818.818 0 0 1 .755 0l7.24 3.755c.303.158.673.158.977 0l7.239-3.755a.818.818 0 0 1 .754 0c.486.252.661.824.391 1.278a.976.976 0 0 1-.39.365l-7.994 4.147Zm0 4a1.07 1.07 0 0 1-.978 0l-7.993-4.147c-.486-.252-.661-.824-.391-1.278a.976.976 0 0 1 .39-.365.818.818 0 0 1 .755 0l7.24 3.755c.303.158.673.158.977 0l7.239-3.755a.818.818 0 0 1 .754 0c.486.252.661.824.391 1.278a.976.976 0 0 1-.39.365l-7.994 4.147Z"/></svg> -->

<script setup lang="ts">
const colorMode = useColorMode()

const toggleDark = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const iconMode = computed(() => colorMode.preference === 'dark' ? 'dark' : 'light')

const links = [{name: '@NuxtSupabase', path: 'https://supabase.nuxtjs.org/'}, {name: 'Source', path: 'https://github.com/AntonioIvanov/NuxtSupabase-basis'}]
</script>

<style scoped>

</style>