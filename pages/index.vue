<template>
  <div class="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div class="text-center max-w-3xl mb-20 mt-8">
      <div class="inline-flex items-center px-3 py-1 rounded-full border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 mb-8">
        <span class="flex h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
        <span class="text-xs font-medium text-gray-600 dark:text-gray-300">v1.0.0 Production Ready</span>
      </div>
      
      <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-gray-900 dark:text-white leading-[1.1]">
        Unified <span class="text-teal-500">Credential</span> Management
      </h1>
      
      <p class="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
        Generate highly customizable passwords and usernames programmatically or visually.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
      <!-- NPM Package Card -->
      <NuxtLink to="/package" class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/60 rounded-3xl p-8 overflow-hidden">
        <div>
          <div class="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center mb-6">
            <UIcon name="i-heroicons-code-bracket-square" class="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">NPM Package</h2>
          <p class="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed font-light">
            Integrate <code class="text-sm font-medium text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-1.5 py-0.5 rounded-md">unique-login-credential</code> directly into your projects. Explore our official documentation and snippets.
          </p>
          <div class="flex items-center text-teal-600 dark:text-teal-400 font-medium text-sm">
            View Documentation <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-1" />
          </div>
        </div>
      </NuxtLink>

      <!-- Generator Card -->
      <NuxtLink to="/generator" class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/60 rounded-3xl p-8 overflow-hidden">
        <div>
          <div class="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center mb-6">
            <UIcon name="i-heroicons-key" class="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Online Generator</h2>
          <p class="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed font-light">
            Use our interactive, slot-based credential generator to manually craft secure passwords that meet your specifications.
          </p>
          <div class="flex items-center text-teal-600 dark:text-teal-400 font-medium text-sm">
            Open Generator <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-1" />
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Unified Credential Management',
  meta: [
    { name: 'description', content: 'Generate highly customizable passwords and usernames using our NPM package or online generator.' }
  ]
})
</script>
