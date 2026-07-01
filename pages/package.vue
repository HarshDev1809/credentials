<template>
  <div class="max-w-4xl mx-auto space-y-12">
    <div class="space-y-4">
      <div class="flex items-center space-x-4">
        <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white">unique-login-credential</h1>
        <UBadge color="primary" variant="subtle">NPM</UBadge>
      </div>
      <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
        A robust, type-safe library to generate unique passwords and usernames.
      </p>

      <div class="bg-gray-900 rounded-lg p-4 flex items-center justify-between shadow-inner border border-gray-800">
        <code class="text-primary-400 text-sm font-mono">{{ installCommand }}</code>
        <UButton color="gray" variant="ghost" icon="i-heroicons-clipboard-document" @click="copyCommand" aria-label="Copy install command" class="text-gray-400 hover:text-white" />
      </div>
    </div>

    <div class="space-y-10">
      <section>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">uniquePassword(options)</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Generates a unique password based on the provided configuration. You can specify exactly how many of each character type you want in the final output.
        </p>

        <UCard class="mb-6 overflow-hidden" :ui="{ body: { padding: '' } }">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-800 text-left">
            <thead class="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Property</th>
                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default</th>
                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900">
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">length</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">number</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">8</td>
                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Total length of the password.</td>
              </tr>
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">capitalLetter</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">number</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">1</td>
                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Minimum number of uppercase letters (A-Z).</td>
              </tr>
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">smallLetter</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">number</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">3</td>
                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Minimum number of lowercase letters (a-z).</td>
              </tr>
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">number</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">number</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">2</td>
                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Minimum number of digits (0-9).</td>
              </tr>
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">specialCharacter</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">number</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">2</td>
                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Minimum number of special characters (!@#$_*).</td>
              </tr>
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">random</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Whether to thoroughly shuffle the final output string.</td>
              </tr>
            </tbody>
          </table>
        </UCard>

        <div class="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto shadow-inner">
<pre><code class="language-typescript text-gray-300 text-sm">import { uniquePassword } from 'unique-login-credential';

// Default configuration
const defaultPwd = uniquePassword();
console.log(defaultPwd);

// Custom configuration
const customPwd = uniquePassword({
  length: 12,
  capitalLetter: 2,
  specialCharacter: 1,
  random: true
});
console.log(customPwd);</code></pre>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">uniqueUsername(options)</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Combines a user-defined prefix with a randomized alphanumeric suffix according to the supplied configuration.
        </p>

        <UCard class="mb-6 overflow-hidden" :ui="{ body: { padding: '' } }">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-800 text-left">
            <thead class="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Property</th>
                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default</th>
                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900">
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">prefix</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">""</td>
                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">The fixed string to prepend to the generated username.</td>
              </tr>
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">length</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">number</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">6</td>
                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Total length of the username (including prefix).</td>
              </tr>
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td colspan="4" class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 italic bg-gray-50 dark:bg-gray-900/50 text-center">
                  Also accepts all configuration options from uniquePassword (capitalLetter, smallLetter, etc.)
                </td>
              </tr>
            </tbody>
          </table>
        </UCard>

        <div class="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto shadow-inner">
<pre><code class="language-typescript text-gray-300 text-sm">import { uniqueUsername } from 'unique-login-credential';

// Using a prefix
const user1 = uniqueUsername({
  prefix: "admin_",
  length: 12,
  random: true
});
console.log(user1); // e.g. "admin_2hA9k"</code></pre>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const packageName = ref('unique-login-credential')
const installCommand = ref(`npm install ${packageName.value}`)

useHead({
  title: 'NPM Package Documentation | Credential Platform',
  meta: [
    { name: 'description', content: `Official documentation for ${packageName.value} npm package.` }
  ]
})

const copyCommand = () => {
  navigator.clipboard.writeText(installCommand.value)
    .then(() => {
      alert('Command copied to clipboard!');
    })
}
</script>
