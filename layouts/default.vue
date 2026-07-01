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
            <UButton color="gray" variant="ghost" icon="i-heroicons-bars-3" aria-label="Menu" @click="isOpen = true" />
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile Slideover -->
    <USlideover v-model="isOpen">
      <div class="p-4 flex-1 flex flex-col h-full bg-white dark:bg-gray-900">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center">
            <UIcon name="i-heroicons-lock-closed" class="w-6 h-6 mr-2 text-primary" />
            <span class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Menu</span>
          </div>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark" aria-label="Close" @click="isOpen = false" />
        </div>

        <nav class="flex flex-col space-y-4">
          <NuxtLink to="/package" class="text-lg font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary" @click="isOpen = false">NPM Package</NuxtLink>
          <NuxtLink to="/generator" class="text-lg font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary" @click="isOpen = false">Online Generator</NuxtLink>
          <div class="pt-4 flex items-center justify-between border-t border-gray-200 dark:border-gray-800">
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">Theme</span>
            <UColorModeButton />
          </div>
        </nav>

        <div class="mt-auto pt-6 border-t border-gray-200 dark:border-gray-800 flex justify-center space-x-6">
          <UButton icon="i-simple-icons-github" color="gray" variant="ghost" to="https://github.com/harshdev1809/unique-login-credential" target="_blank" aria-label="GitHub" />
          <UButton icon="i-simple-icons-npm" color="gray" variant="ghost" to="https://www.npmjs.com/package/unique-login-credential" target="_blank" aria-label="NPM" />
        </div>
      </div>
    </USlideover>

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
import { ref } from 'vue'

const isOpen = ref(false)
</script>
