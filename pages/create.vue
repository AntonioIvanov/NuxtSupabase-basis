<template>
  <div class="lg:flex">
    <div class="w-full lg:w-1/2 flex justify-center rounded-lg p-4 ">
      <div class="w-full lg:w-fit overflow-x-hidden" >
        <p class="text-primary text-4xl pb-6">Add a restaurant!</p>
        <p class="text-sm pb-2">Restaurant Name:</p>
        <input v-model="name" type="text" maxlength="30" class="w-full py-1 px-4 border lg:max-w-sm border-gray-400 bg-transparent text-sm rounded-lg focus:outline-none focus:border-primary mb-4" placeholder="Canes...">
        <p class="text-sm pb-2">Categories:</p>
        <div class="w-full lg:max-w-sm">
          <button
          v-for="cat in categories"
          @click="addCat(cat)"
          class="border inline-block whitespace-nowrap px-2 py-1 rounded-lg text-sm mr-3 mb-2"
          :class="selected.includes(cat) ? 'border-primary' : 'border-gray-400 text-gray-400'">
          {{ cat }}</button>
        </div>
        <p class="text-sm pb-2 mt-4">Status:</p>
        <div class="w-full flex space-x-4">
          <button @click="status = true" :class="status ? 'border-primary' : 'border-gray-400 text-gray-400'" class="w-fit transition bg-transparent focus:outline-none px-6 py-1 border rounded-lg text-sm">
            Open
          </button>
          <button @click="status = false" :class="!status ? 'border-primary' : 'border-gray-400 text-gray-400'" class="w-fit transition bg-transparent focus:outline-none px-6 py-1 border rounded-lg text-sm">
            Close
          </button>
        </div>
        <p class="text-sm pb-2 mt-4">Description:</p>
        <textarea
        v-model="description"
        maxlength="115"
        placeholder="Write something cool!"
        class="w-full bg-transparent border lg:max-w-sm border-gray-400 focus:outline-none focus:border-primary p-2 text-sm rounded-lg"
        rows="4"></textarea>
        
        <div class="flex justify-center items-center pt-6">
          <BaseButton :disabled="disabled" @click="addRestaurant" :text="'Upload'" class="text-sm px-6" />
        </div>
      </div>
    </div>

    <!-- Code section -->
    <div class="w-full lg:w-1/2 md:px-12 pt-6 pb-12 lg:pb-0 lg:pt-8 overflow-x-hidden">
      <BlocksInsert :data="result" />
    </div>
  </div>

</template>

<script setup lang="ts">
  definePageMeta({
    layout: "authenticated",
  });

  type Result = {
    id?: string | ''
    name?: string | ''
    categories?: string[] | []
    open?: boolean | false
    description?: string | ''
  }

  const client = supabaseClient()
  const user = useSupabaseUser()

  const name = ref('')
  const description = ref('')
  const categories = ['Pizza', 'Sushi', 'Hamburburs', 'Seafood', 'Chicken', 'Mexican', 'Waffles', 'Gelato', 'Japanese', 'Italian', 'Sandwiches']
  const selected: string[] = reactive([])
  const status = ref(true)
  // we have to declare a object
  const result = ref<Result>({})
  const disabled = computed(() => {
    if (!name.value || !description.value || selected.length == 0 || !user.value) return true
    return false
  })

  const clearData = () => {
    selected.splice(0)
    name.value = ''
    description.value = ''
    status.value = true
  }
  
  const addCat = (cat: string) => {  
    if (selected.length >= 3 && !selected.includes(cat)) return;
    if (selected.includes(cat)) return selected.splice(selected.indexOf(cat), 1)
    selected.push(cat)
  }
  
  const addRestaurant = async () => {
    if (!name.value || !description.value || selected.length == 0 || !user.value) return 

    const arr = JSON.stringify(selected).replace('[', '{').replace(']', '}');
    
    
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

      // it will retrieve an object
      result.value = data as Result

      // we have to clear the inputs
      clearData()
  }
</script>

<style scoped>
</style>