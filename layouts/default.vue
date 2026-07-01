<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
    <!-- Navbar -->
    <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex-shrink-0 flex items-center">
            <UIcon name="i-heroicons-lock-closed" class="w-6 h-6 mr-2 text-primary" />
            <NuxtLink to="/" class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Credential Platform</NuxtLink>
          </div>
          <nav class="hidden md:flex items-center space-x-6">
            <NuxtLink to="/package" class="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors">NPM Package</NuxtLink>
            <NuxtLink to="/generator" class="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Online Generator</NuxtLink>
            <UColorModeButton />
          </nav>

          <!-- Mobile Hamburger -->
          <div class="flex md:hidden items-center">
            <UButton color="gray" variant="ghost" :icon="isOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" aria-label="Menu" @click="isOpen = !isOpen" />
          </div>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <div v-show="isOpen" class="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <nav class="flex flex-col px-4 pt-4 pb-6 space-y-4">
          <NuxtLink to="/package" class="text-lg font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary" @click="isOpen = false">NPM Package</NuxtLink>
          <NuxtLink to="/generator" class="text-lg font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary" @click="isOpen = false">Online Generator</NuxtLink>
          
          <div class="pt-4 flex items-center justify-between border-t border-gray-200 dark:border-gray-800">
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">Theme</span>
            <UColorModeButton />
          </div>

          <div class="pt-4 flex items-center space-x-6">
            <UButton icon="i-simple-icons-github" color="gray" variant="ghost" to="https://github.com/harshdev1809/unique-login-credential" target="_blank" aria-label="GitHub" />
            <UButton icon="i-simple-icons-npm" color="gray" variant="ghost" to="https://www.npmjs.com/package/unique-login-credential" target="_blank" aria-label="NPM" />
          </div>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm text-gray-500 dark:text-gray-400">Built with Nuxt & Nuxt UI.</p>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <UButton icon="i-simple-icons-github" color="gray" variant="ghost" to="https://github.com/harshdev1809/unique-login-credential" target="_blank" />
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
