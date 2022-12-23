<template>
  <div>
    <button
      :disabled="props.disabled"
      :class="props.disabled ? 'border-gray-400 text-gray-400' : 'border-primary'"
      class="w-fit py-1 px-4 border focus:outline-none rounded-lg">
      {{ props.text }}</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string,
  disabled?: boolean
}>()

</script>

<style scoped>

</style>