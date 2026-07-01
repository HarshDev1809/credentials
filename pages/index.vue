<template>
  <div class="flex flex-col items-center justify-center space-y-12 py-16">
    <div class="text-center max-w-3xl">
      <h1 class="text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
        Unified Credential Management
      </h1>
      <p class="text-xl text-gray-600">
        Generate highly customizable passwords and usernames. Use our robust NPM package programmatically, or our beautiful online tool right here in the browser.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
      <UCard class="hover:shadow-lg transition-shadow duration-300">
        <template #header>
          <div class="flex items-center space-x-3">
            <UIcon name="i-heroicons-code-bracket-square" class="w-8 h-8 text-[#D4B895]" />
            <h2 class="text-2xl font-bold text-gray-900">NPM Package</h2>
          </div>
        </template>
        <p class="text-gray-600 mb-6">
          Integrate <code class="bg-gray-100 px-1 rounded text-sm text-[#8B6B43]">unique-login-credential</code> directly into your TypeScript or JavaScript projects. Explore our official documentation and code snippets.
        </p>
        <template #footer>
          <UButton to="/package" color="gray" variant="solid" size="lg" block class="bg-[#EADDCA] hover:bg-[#D4B895] text-gray-900 transition-colors">
            View Documentation
          </UButton>
        </template>
      </UCard>

      <UCard class="hover:shadow-lg transition-shadow duration-300">
        <template #header>
          <div class="flex items-center space-x-3">
            <UIcon name="i-heroicons-key" class="w-8 h-8 text-[#D4B895]" />
            <h2 class="text-2xl font-bold text-gray-900">Online Generator</h2>
          </div>
        </template>
        <p class="text-gray-600 mb-6">
          Use our interactive, slot-based credential generator to manually craft secure passwords that meet your exact specifications.
        </p>
        <template #footer>
          <UButton to="/generator" color="gray" variant="solid" size="lg" block class="bg-[#EADDCA] hover:bg-[#D4B895] text-gray-900 transition-colors">
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
