<template>
  <div>
    <button
      class="w-fit py-1 px-4 border border-primary focus:outline-none rounded-lg">
      {{ props.text }}</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string,
}>()

</script>

<style scoped>

</style>