<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style>
@reference "tailwindcss";
:root {
  --ui-primary: var(--color-teal-500);
}
body {
  @apply bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans antialiased selection:bg-teal-500/30 selection:text-teal-900 dark:selection:text-teal-100;
}
</style>
