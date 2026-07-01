<template>
  <div class="max-w-3xl mx-auto py-8">
    <UCard class="shadow-xl border border-gray-100">
      <template #header>
        <div class="text-center">
          <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">Password Generator</h1>
          <p class="text-sm text-gray-500 mt-2">Customize each character slot to build your perfect password.</p>
        </div>
      </template>

      <!-- Generator Configuration Area -->
      <div class="space-y-6">
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-4">
          <div v-for="(slot, index) in characterSlots" :key="index" class="flex flex-col items-center space-y-2 p-3 bg-[#FDFDFD] border border-gray-200 rounded-lg shadow-sm">
            <!-- Output display for this specific character slot -->
            <div class="w-10 h-12 flex items-center justify-center bg-gray-50 border border-gray-300 rounded font-mono text-xl font-bold text-[#8B6B43]">
              {{ generatedPassword[index] || ' ' }}
            </div>
            <!-- Selection Dropdown -->
            <USelect
              v-model="slot.type"
              :options="dropdownOptions"
              class="w-full"
              size="sm"
            />
          </div>
        </div>
      </div>

      <!-- Action Area -->
      <template #footer>
        <div class="flex flex-col space-y-6">
          <UButton
            @click="generate"
            size="xl"
            block
            class="bg-gray-900 hover:bg-gray-800 text-white font-bold transition-colors py-4 text-lg"
          >
            GENERATE
          </UButton>

          <!-- Result Display -->
          <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 flex items-center justify-between shadow-inner">
            <div class="flex-1 overflow-x-auto whitespace-nowrap mr-4">
              <span class="text-xs font-semibold text-gray-400 uppercase tracking-widest block mb-1">Output</span>
              <span class="font-mono text-2xl text-gray-800 font-medium">
                {{ finalOutput || 'Click generate...' }}
              </span>
            </div>
            <UButton
              @click="copyOutput"
              :disabled="!finalOutput"
              color="white"
              variant="solid"
              icon="i-heroicons-clipboard-document-check"
              class="flex-shrink-0"
              size="lg"
            />
          </div>
        </div>
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCredentialGenerator } from '~/composables/useCredentialGenerator'
import type { CharType } from '~/composables/useCredentialGenerator'

useHead({
  title: 'Online Generator | Credential Platform',
  meta: [
    { name: 'description', content: 'Generate passwords with granular control over every single character.' }
  ]
})

const { generateCharacter } = useCredentialGenerator()

type SlotOption = CharType | 'empty'

interface Slot {
  type: SlotOption
}

const dropdownOptions = [
  { label: 'A-Z', value: 'capitalAlphabet' },
  { label: 'a-z', value: 'smallAlphabet' },
  { label: '0-9', value: 'number' },
  { label: 'Special', value: 'specialCharacter' },
  { label: '---', value: 'empty' },
]

// The 10 slots from the original `password-generator`
const characterSlots = ref<Slot[]>([
  { type: 'capitalAlphabet' },
  { type: 'smallAlphabet' },
  { type: 'smallAlphabet' },
  { type: 'smallAlphabet' },
  { type: 'number' },
  { type: 'number' },
  { type: 'specialCharacter' },
  { type: 'specialCharacter' },
  { type: 'empty' },
  { type: 'empty' },
])

const generatedPassword = ref<string[]>([])

const finalOutput = computed(() => generatedPassword.value.join(''))

const generate = () => {
  generatedPassword.value = characterSlots.value.map(slot => generateCharacter(slot.type))
}

const copyOutput = () => {
  if (finalOutput.value) {
    navigator.clipboard.writeText(finalOutput.value).then(() => {
      alert('Password copied to clipboard!')
    })
  }
}
</script>
