<template>
  <div>
    <pre>
      <code>
        // This is some code
        <span class="keyword">var</span> x = 10;
        <span class="keyword">var</span> y = 20;
        console.<span class="function">log</span>(x + y);
      </code>
    </pre>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.keyword {
    color: orange;
  }
  .function {
    color: purple;
  }

</style>