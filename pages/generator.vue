<template>
  <div class="max-w-3xl mx-auto py-12 px-4 sm:px-6">
    <div class="mb-12 text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">Secure Generator</h1>
      <p class="text-lg text-gray-500 dark:text-gray-400 font-light">Create strong, customized passwords in a single click.</p>
    </div>

    <div class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/60 rounded-[2rem] p-6 md:p-10">
      <!-- Output Area -->
      <div class="mb-10">
        <div class="bg-gray-50 dark:bg-gray-950 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between border border-gray-100 dark:border-gray-800">
          <div class="flex-1 w-full overflow-hidden mb-6 md:mb-0 mr-0 md:mr-6 text-center md:text-left">
            <span
              class="font-mono text-2xl md:text-3xl font-medium tracking-wider text-gray-800 dark:text-gray-100 break-all select-all"
            >
              {{ generatedPassword || 'Click generate...' }}
            </span>
          </div>

          <UButton
            @click="copyOutput"
            :disabled="!generatedPassword"
            color="primary"
            variant="soft"
            icon="i-heroicons-document-duplicate"
            size="xl"
            class="flex-shrink-0 w-full md:w-auto justify-center rounded-xl font-semibold"
            aria-label="Copy to clipboard"
          >
            Copy
          </UButton>
        </div>
      </div>

      <!-- Controls Area -->
      <div class="space-y-8">
        <!-- Length Slider -->
        <div>
          <div class="flex items-center justify-between mb-4">
            <label class="text-sm font-medium text-gray-600 dark:text-gray-400">Password Length</label>
            <span class="text-xl font-bold text-teal-600 dark:text-teal-400">{{ options.length }}</span>
          </div>
          <URange v-model="options.length" :min="8" :max="64" size="md" color="primary" />
        </div>

        <!-- Toggles -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800/60 cursor-pointer" @click="options.uppercase = !options.uppercase">
            <div>
              <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Uppercase Letters</div>
              <div class="text-xs text-gray-400 mt-0.5">A-Z</div>
            </div>
            <UToggle v-model="options.uppercase" color="primary" @click.stop />
          </div>

          <div class="flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800/60 cursor-pointer" @click="options.lowercase = !options.lowercase">
            <div>
              <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Lowercase Letters</div>
              <div class="text-xs text-gray-400 mt-0.5">a-z</div>
            </div>
            <UToggle v-model="options.lowercase" color="primary" @click.stop />
          </div>

          <div class="flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800/60 cursor-pointer" @click="options.numbers = !options.numbers">
            <div>
              <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Numbers</div>
              <div class="text-xs text-gray-400 mt-0.5">0-9</div>
            </div>
            <UToggle v-model="options.numbers" color="primary" @click.stop />
          </div>

          <div class="flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800/60 cursor-pointer" @click="options.symbols = !options.symbols">
            <div>
              <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Symbols</div>
              <div class="text-xs text-gray-400 mt-0.5">!@#$%^&*</div>
            </div>
            <UToggle v-model="options.symbols" color="primary" @click.stop />
          </div>
        </div>
      </div>

      <!-- Action Button -->
      <div class="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800/60">
        <UButton
          @click="generate"
          size="xl"
          block
          color="primary"
          variant="solid"
          class="font-bold py-4 text-lg rounded-2xl"
          icon="i-heroicons-arrow-path"
        >
          GENERATE NEW PASSWORD
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCredentialGenerator } from '~/composables/useCredentialGenerator'

useHead({
  title: 'Secure Generator | Credential Platform',
  meta: [
    { name: 'description', content: 'Create strong, customized passwords in a single click.' }
  ]
})

const { uniquePassword } = useCredentialGenerator()

const generatedPassword = ref('')

const options = ref({
  length: 16,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true
})

const generate = () => {
  if (!options.value.uppercase && !options.value.lowercase && !options.value.numbers && !options.value.symbols) {
    alert("Please select at least one character type.")
    return
  }

  const config = {
    length: options.value.length,
    capitalLetter: options.value.uppercase ? 1 : 0,
    smallLetter: options.value.lowercase ? 1 : 0,
    number: options.value.numbers ? 1 : 0,
    specialCharacter: options.value.symbols ? 1 : 0,
    random: true
  }

  try {
    generatedPassword.value = uniquePassword(config)
  } catch (error: any) {
    alert(error.message)
  }
}

const copyOutput = () => {
  if (generatedPassword.value) {
    navigator.clipboard.writeText(generatedPassword.value).then(() => {
      // Basic feedback, could be a toast in a real app
    })
  }
}

onMounted(() => {
  generate()
})
</script>
