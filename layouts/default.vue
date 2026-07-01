<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
    <!-- Navbar -->
    <header class="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex-shrink-0 flex items-center">
            <UIcon name="i-heroicons-lock-closed" class="w-6 h-6 mr-2 text-primary" />
            <NuxtLink to="/" class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Credential Platform</NuxtLink>
          </div>
          <nav class="hidden md:flex items-center space-x-6">
            <NuxtLink to="/package" class="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors" active-class="text-primary dark:text-primary font-semibold">NPM Package</NuxtLink>
            <NuxtLink to="/generator" class="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors" active-class="text-primary dark:text-primary font-semibold">Online Generator</NuxtLink>
            <UColorModeButton />
          </nav>

          <!-- Mobile Hamburger -->
          <div class="flex md:hidden items-center">
            <UButton color="gray" variant="ghost" :icon="isOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" aria-label="Menu" @click="isOpen = !isOpen" />
          </div>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
      >
        <div v-show="isOpen" class="md:hidden absolute top-full left-0 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl shadow-2xl rounded-b-3xl origin-top overflow-hidden">
          <nav class="flex flex-col p-4 space-y-2">
            <NuxtLink to="/package" class="flex items-center px-4 py-4 text-lg font-semibold text-gray-900 dark:text-white rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-all" active-class="bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400" @click="isOpen = false">
              <UIcon name="i-simple-icons-npm" class="w-6 h-6 mr-3 opacity-70" />
              NPM Package
            </NuxtLink>
            <NuxtLink to="/generator" class="flex items-center px-4 py-4 text-lg font-semibold text-gray-900 dark:text-white rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-all" active-class="bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400" @click="isOpen = false">
              <UIcon name="i-heroicons-key" class="w-6 h-6 mr-3 opacity-70" />
              Online Generator
            </NuxtLink>
            
            <div class="mt-4 p-4 bg-gray-50 dark:bg-gray-800/30 rounded-2xl border border-gray-100 dark:border-gray-800 flex flex-col space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-sm font-semibold text-gray-500 dark:text-gray-400">Theme</span>
                <UColorModeButton size="md" />
              </div>

              <div class="border-t border-gray-200 dark:border-gray-700/50 pt-4 flex items-center justify-around">
                <UButton icon="i-simple-icons-github" color="gray" variant="ghost" to="https://github.com/harshdev1809/unique-login-credential" target="_blank" aria-label="GitHub" />
                <UButton icon="i-simple-icons-npm" color="gray" variant="ghost" to="https://www.npmjs.com/package/unique-login-credential" target="_blank" aria-label="NPM" />
              </div>
            </div>
          </nav>
        </div>
      </transition>
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
