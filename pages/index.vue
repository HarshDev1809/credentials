<template>
  <div class="flex flex-col items-center justify-center space-y-16 py-20 relative">
    <!-- Ambient Background Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full max-w-2xl h-[400px] bg-primary-500/10 dark:bg-primary-400/10 rounded-full blur-3xl pointer-events-none"></div>
    
    <div class="text-center max-w-3xl relative z-10">
      <UBadge color="primary" variant="subtle" size="lg" class="mb-6 rounded-full px-4">v1.0.0 Ready</UBadge>
      <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent pb-2">
        Unified <span class="text-primary-500 dark:text-primary-400">Credential</span> Management
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400">
        Generate highly customizable passwords and usernames. Use our robust NPM package programmatically, or our beautiful online tool right here in the browser.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 w-full max-w-4xl relative z-10">
      <UCard class="hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/5 transition-all duration-300 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 group">
        <template #header>
          <div class="flex items-center space-x-3">
            <UIcon name="i-heroicons-code-bracket-square" class="w-8 h-8 text-primary" />
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">NPM Package</h2>
          </div>
        </template>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Integrate <code class="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm text-primary">unique-login-credential</code> directly into your TypeScript or JavaScript projects. Explore our official documentation and code snippets.
        </p>
        <template #footer>
          <UButton to="/package" color="gray" variant="solid" size="lg" block>
            View Documentation
          </UButton>
        </template>
      </UCard>

      <UCard class="hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/5 transition-all duration-300 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 group">
        <template #header>
          <div class="flex items-center space-x-3">
            <UIcon name="i-heroicons-key" class="w-8 h-8 text-primary" />
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Online Generator</h2>
          </div>
        </template>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Use our interactive, slot-based credential generator to manually craft secure passwords that meet your exact specifications.
        </p>
        <template #footer>
          <UButton to="/generator" color="primary" variant="solid" size="lg" block>
            Open Generator
          </UButton>
        </template>
      </UCard>
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
