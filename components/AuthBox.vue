<template>
  <div class="w-full rounded-lg max-w-xl border border-primary shadow-2xl py-4 transition">
    <div class="flex justify-center">
      <button @click="auth = 'sign_up'" :class="auth == 'sign_up' ? 'text-primary' : 'text-gray-400 dark:text-white'">Sign Up</button>
      <p class="px-6">/</p>
      <button @click="auth = 'log_in'" :class="auth == 'log_in' ? 'text-primary' : 'text-gray-400 dark:text-white'">Log in</button>
    </div>

    <!-- Form -->
    <div class="px-8 md:px-12 flex flex-col pt-6">
      <label for="email" class="text-gray-500">Email:</label>
      <input 
        type="email" 
        v-model="email" 
        name="email"
        class="w-full bg-transparent px-2 md:mt-1 mb-4 py-1 rounded-lg border border-primary focus:outline-none focus:ring-2 ring-primary ring-offset-4 ring-offset-white dark:ring-offset-[#1C1C1C]" 
        autocomplete="on" 
        placeholder="example@vk.ru">

      <label for="password" class="text-gray-500">Password:</label>
      <input 
        type="password" 
        v-model="password" 
        name="password"
        class="w-full bg-transparent md:mt-1 px-2 py-1 rounded-lg border border-primary focus:outline-none focus:ring-2 ring-primary ring-offset-4 ring-offset-white dark:ring-offset-[#1C1C1C]" 
        autocomplete="new-password" 
        placeholder="*************">
        <transition name="fade">
          <p v-if="err" class="text-red-400 text-xs text-center -mb-2 pt-6">{{ err }}</p>
        </transition>
        <div class="w-full flex justify-center pt-6 pb-4">
          <button v-if="auth == 'sign_up'" @click="signUp" class="w-fit text-primary dark:text-white rounded-md text-sm px-6 py-1 border border-primary ring-2 ring-primary ring-offset-4 ring-offset-white dark:ring-offset-[#1C1C1C]">Sign up</button>
          <button v-else @click="signIn" class="w-fit text-primary dark:text-white rounded-md text-sm px-6 py-1 border border-primary ring-2 ring-primary ring-offset-4 ring-offset-white dark:ring-offset-[#1C1C1C]">Log in</button>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const client = useSupabaseAuthClient()
const auth = ref('sign_up')
const email = ref('')
const password = ref('')
const err = ref('')

// Functions
const signUp = async () => {  
  // Simple Sign up with supabase
  const { data, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        type: 'foodie' // i added extra data to make use of it on Middleware
      }
    }
  })
  if (error) return showErr(error.message)
  
}

const signIn = async () => {  
  // Simple Sign up with supabase
  const { data, error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })  
  if (error) return showErr(error.message)
}

const showErr = (message: string) => {
  err.value = message
  setTimeout(() => {
    err.value = ''
  }, 4000);
}

</script>

<style scoped>

</style>