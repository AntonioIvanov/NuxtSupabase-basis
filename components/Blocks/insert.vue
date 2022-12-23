<template>
  <div class="w-full relative">
    <button @click="copyCode" class="absolute top-0 right-0 mr-3 mt-3 group">
      <svg v-if="!copied" class="h-5 w-auto fill-gray-400 opacity-50 group-hover:opacity-100" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25v7.46a1.75 1.75 0 0 0-1.5-1.692V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h5.38l.812.913c.343.386.818.584 1.297.587H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2h3.5Zm2.245 2.096L16 4.25c0-.052-.002-.103-.005-.154ZM13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Z"/><path d="M19 13.75a.75.75 0 0 1-.03.212l-2.5 8.5a.75.75 0 1 1-1.44-.424l2.5-8.5a.75.75 0 0 1 1.47.212Zm-7.81 4.748a.75.75 0 0 1 0-.996l2-2.25a.75.75 0 0 1 1.12.996L12.755 18l1.557 1.752a.75.75 0 0 1-1.122.996l-2-2.25Zm8.562 2.312a.75.75 0 0 1-.063-1.058L21.247 18l-1.558-1.752a.75.75 0 0 1 1.122-.996l2 2.25a.75.75 0 0 1 0 .996l-2 2.25a.75.75 0 0 1-1.06.063Z"/></svg>
      <p v-else class="text-primary text-xs">Copied!</p>
    </button>
<pre class="bg-[#e5e6e8] dark:bg-[#1f1f1f] dark:shadow-2xl rounded-lg px-4 lg:pl-8 overflow-auto"><code class="w-full text-xs md:text-md text-[#555555] dark:text-white">
<span class="text-gray-400 text-xs">// Actual code </span>
<span class="c">const</span> client = <span class="f">supabaseClient</span><span class="p">()</span> <span class="text-gray-400">// Added a new composable for Types</span>
<span class="c">const</span> user = <span class="f">useSupabaseUser</span><span class="p">()</span>

<span class="c">const</span> <span class="f">addRestaurant</span> = <span class="c">sync</span> <span class="p">()</span> <span class="c">=></span> <span class="p">{</span>
  <span class="r">if</span> <span class="c">(!</span>user.value<span class="c">)</span> <span class="r">return</span>
  <span class="c">const</span> <span class="c">{</span> data <span class="c">} =</span> <span class="r">await</span> client
    <span class="f">.from</span><span class="p">(</span>'restaurants'<span class="p">)</span>
    <span class="f">.upsert</span><span class="c">(</span><span class="r">{</span>
      id: user.value.id,
      name: name.value,
      categories: arr,
      open: status.value,
      description: description.value
    <span class="r">}</span><span class="p">)</span>
    <span class="f">.select</span><span class="c">(</span>'name, categories, open, description'<span class="c">)</span>
    <span class="f">.single</span><span class="c">()</span>
    console.<span class="r">log</span><span class="c">(</span>data<span class="c">)</span>;   
<span class="p">}</span>


<span class="text-gray-400">// Result</span>
{{ results }}

</code></pre>
  </div>
</template>
<script setup lang="ts">
  // we have to declare the props
  const props = defineProps<{
    data?: Object
  }>()
  const results = computed(() => {
    if (JSON.stringify(props.data) === '{}') return ''
    return props.data
  })
  const code = `
  const client = useSupabaseClient()
  const user = useSupabaseUser()

  const addRestaurant = async () => {
  if (!user.value) return
  const { data } = await client
    .from('restaurants')
    .upsert({
      id: user.value.id,
      name: name.value,
      categories: arr,
      open: status.value,
      description: description.value
    })
    .select('name, categories, open, description')
    .single()
    console.log(result);   
}`
  const copied = ref(false)

  function copyCode() {
    navigator.clipboard.writeText(code);
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000);
  }
</script>

<style scoped>
.c {
  color: #FCA5A5;
}
.f {
  color: #12b488;
}
.p {
  color: #FACC15;
}
.r {
  color: #3ac6ff
}
</style>