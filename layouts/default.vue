<template>
  <div class="min-h-screen bg-[#FDFDFD] font-sans text-gray-900">
    <!-- Navbar -->
    <header class="sticky top-0 z-50 bg-[#EADDCA] border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="text-xl font-bold tracking-tight text-gray-900">Credential Platform</NuxtLink>
          </div>
          <nav class="hidden md:flex space-x-8">
            <NuxtLink to="/package" class="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">NPM Package</NuxtLink>
            <NuxtLink to="/generator" class="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">Online Generator</NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-50 border-t border-gray-200 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-center">
        <p class="text-sm text-gray-500">Built with Nuxt UI and Vue 3.</p>
      </div>
    </footer>
  </div>
</template>
