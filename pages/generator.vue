<template>
  <div class="max-w-2xl mx-auto py-12">
    <div class="mb-8 text-center">
      <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">Secure Generator</h1>
      <p class="text-gray-500 dark:text-gray-400 mt-2">Create strong, customized passwords in a single click.</p>
    </div>

    <UCard class="shadow-2xl shadow-primary/5 border border-gray-200/50 dark:border-gray-800/50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
      <!-- Output Area -->
      <div class="relative group">
        <div class="bg-gray-50/80 dark:bg-black/50 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between border border-gray-200/50 dark:border-gray-700/50 shadow-inner backdrop-blur-sm transition-all duration-300 hover:ring-1 hover:ring-primary/50">
          <div class="flex-1 w-full overflow-hidden mb-4 md:mb-0 mr-0 md:mr-4 text-center md:text-left">
            <span
              class="font-mono text-3xl font-bold tracking-wider text-gray-900 dark:text-white break-all select-all transition-all duration-200"
              :class="{ 'opacity-50 blur-[2px]': isGenerating }"
            >
              {{ generatedPassword || 'Click generate...' }}
            </span>
          </div>

          <UButton
            @click="copyOutput"
            :disabled="!generatedPassword"
            color="primary"
            variant="solid"
            icon="i-heroicons-clipboard-document-check"
            size="xl"
            class="flex-shrink-0 w-full md:w-auto justify-center"
            aria-label="Copy to clipboard"
          >
            Copy
          </UButton>
        </div>
      </div>

      <!-- Controls Area -->
      <div class="mt-10 space-y-8">
        <!-- Length Slider -->
        <div>
          <div class="flex items-center justify-between mb-4">
            <label class="text-sm font-semibold text-gray-700 dark:text-gray-300">Password Length</label>
            <UBadge size="lg" color="gray" variant="solid">{{ options.length }}</UBadge>
          </div>
          <URange v-model="options.length" :min="8" :max="64" size="md" color="primary" />
        </div>

        <!-- Toggles -->
        <div class="bg-white/50 dark:bg-gray-800/30 rounded-xl p-5 border border-gray-200/50 dark:border-gray-700/50 shadow-sm backdrop-blur-sm">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <UFormGroup>
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Uppercase Letters</span>
                <UToggle v-model="options.uppercase" color="primary" />
              </div>
              <p class="text-xs text-gray-500 mt-1">A-Z</p>
            </UFormGroup>

            <UFormGroup>
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Lowercase Letters</span>
                <UToggle v-model="options.lowercase" color="primary" />
              </div>
              <p class="text-xs text-gray-500 mt-1">a-z</p>
            </UFormGroup>

            <UFormGroup>
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Numbers</span>
                <UToggle v-model="options.numbers" color="primary" />
              </div>
              <p class="text-xs text-gray-500 mt-1">0-9</p>
            </UFormGroup>

            <UFormGroup>
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Symbols</span>
                <UToggle v-model="options.symbols" color="primary" />
              </div>
              <p class="text-xs text-gray-500 mt-1">!@#$%^&*</p>
            </UFormGroup>
          </div>
        </div>
      </div>

      <!-- Action Button -->
      <template #footer>
        <div class="pt-4">
          <UButton
            @click="generate"
            size="xl"
            block
            color="primary"
            variant="solid"
            class="font-bold py-4 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            icon="i-heroicons-arrow-path"
          >
            GENERATE NEW PASSWORD
          </UButton>
        </div>
      </template>
    </UCard>
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
const isGenerating = ref(false)

// State for the modern UI controls
const options = ref({
  length: 16,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true
})

const generate = () => {
  // Prevent generation if no character types are selected
  if (!options.value.uppercase && !options.value.lowercase && !options.value.numbers && !options.value.symbols) {
    alert("Please select at least one character type.")
    return
  }

  isGenerating.value = true

  // Simulate a tiny delay for visual feedback
  setTimeout(() => {
    // Map boolean toggles to the numbers expected by uniquePassword
    const config = {
      length: options.value.length,
      capitalLetter: options.value.uppercase ? 1 : 0,
      smallLetter: options.value.lowercase ? 1 : 0,
      number: options.value.numbers ? 1 : 0,
      specialCharacter: options.value.symbols ? 1 : 0,
      random: true // Always shuffle for security in this mode
    }

    try {
      generatedPassword.value = uniquePassword(config)
    } catch (error: any) {
      alert(error.message)
    } finally {
      isGenerating.value = false
    }
  }, 150)
}

const copyOutput = () => {
  if (generatedPassword.value) {
    navigator.clipboard.writeText(generatedPassword.value).then(() => {
      // In a real app we'd use a toast notification
      alert('Password copied to clipboard!')
    })
  }
}

// Generate an initial password on mount
onMounted(() => {
  generate()
})
</script>
