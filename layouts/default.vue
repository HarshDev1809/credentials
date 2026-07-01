<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans flex flex-col">
    <!-- Navbar -->
    <header class="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20 items-center">
          <div class="flex-shrink-0 flex items-center">
            <div class="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center mr-3">
              <UIcon name="i-heroicons-lock-closed" class="w-5 h-5 text-teal-600 dark:text-teal-400" />
            </div>
            <NuxtLink to="/" class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Credential Platform</NuxtLink>
          </div>
          <nav class="hidden md:flex items-center space-x-8">
            <NuxtLink to="/package" class="text-gray-500 dark:text-gray-400 text-sm font-medium" active-class="!text-teal-600 dark:!text-teal-400">NPM Package</NuxtLink>
            <NuxtLink to="/generator" class="text-gray-500 dark:text-gray-400 text-sm font-medium" active-class="!text-teal-600 dark:!text-teal-400">Online Generator</NuxtLink>
            <div class="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>
            <UColorModeButton />
          </nav>

          <!-- Mobile Hamburger -->
          <div class="flex md:hidden items-center">
            <UButton color="gray" variant="ghost" :icon="isOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" aria-label="Menu" @click="isOpen = !isOpen" />
          </div>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <div v-show="isOpen" class="md:hidden absolute top-full left-0 w-full border-b border-gray-100 dark:border-gray-800/60 bg-white dark:bg-gray-900 origin-top overflow-hidden">
        <nav class="flex flex-col p-4 space-y-2">
          <NuxtLink to="/package" class="flex items-center px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 rounded-xl" active-class="bg-teal-50 dark:bg-teal-900/20 !text-teal-700 dark:!text-teal-400" @click="isOpen = false">
            <UIcon name="i-simple-icons-npm" class="w-5 h-5 mr-3 opacity-70" />
            NPM Package
          </NuxtLink>
          <NuxtLink to="/generator" class="flex items-center px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 rounded-xl" active-class="bg-teal-50 dark:bg-teal-900/20 !text-teal-700 dark:!text-teal-400" @click="isOpen = false">
            <UIcon name="i-heroicons-key" class="w-5 h-5 mr-3 opacity-70" />
            Online Generator
          </NuxtLink>
          
          <div class="mt-4 p-4 flex items-center justify-between border-t border-gray-100 dark:border-gray-800/60">
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">Theme</span>
            <UColorModeButton size="md" />
          </div>
          
          <div class="flex items-center justify-center space-x-4 pt-2 pb-4">
            <UButton icon="i-simple-icons-github" color="gray" variant="ghost" to="https://github.com/harshdev1809/unique-login-credential" target="_blank" aria-label="GitHub" />
            <UButton icon="i-simple-icons-npm" color="gray" variant="ghost" to="https://www.npmjs.com/package/unique-login-credential" target="_blank" aria-label="NPM" />
          </div>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow w-full">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="mt-auto border-t border-gray-100 dark:border-gray-800/60 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Built with Nuxt & Tailwind.</p>
        <div class="flex items-center space-x-4">
          <UButton icon="i-simple-icons-github" color="gray" variant="ghost" to="https://github.com/harshdev1809/unique-login-credential" target="_blank" class="text-gray-400" />
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)

const handleResize = () => {
  if (window.innerWidth >= 768) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  // Check initially as well
  handleResize()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
