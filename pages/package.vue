<template>
  <div class="max-w-4xl mx-auto py-12 px-4 sm:px-6 space-y-16">
    <div class="space-y-6">
      <div class="flex items-center space-x-4">
        <div class="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center">
          <UIcon name="i-simple-icons-npm" class="w-6 h-6 text-teal-600 dark:text-teal-400" />
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">unique-login-credential</h1>
      </div>
      <p class="text-xl text-gray-500 dark:text-gray-400 leading-relaxed font-light">
        A robust, type-safe library to generate unique passwords and usernames.
      </p>

      <div class="bg-gray-50 dark:bg-gray-950 rounded-2xl p-4 flex items-center justify-between border border-gray-100 dark:border-gray-800">
        <code class="text-teal-600 dark:text-teal-400 font-mono text-sm pl-2">{{ installCommand }}</code>
        <UButton color="gray" variant="ghost" icon="i-heroicons-clipboard-document" @click="copyCommand" aria-label="Copy install command" class="text-gray-400" />
      </div>
    </div>

    <div class="space-y-12">
      <section>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <span class="text-teal-500 mr-2">#</span> uniquePassword(options)
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6 font-light leading-relaxed">
          Generates a unique password based on the provided configuration. You can specify exactly how many of each character type you want in the final output.
        </p>

        <div class="border border-gray-100 dark:border-gray-800/60 rounded-2xl overflow-hidden mb-6 bg-white dark:bg-gray-900">
          <table class="min-w-full divide-y divide-gray-100 dark:divide-gray-800 text-left">
            <thead class="bg-gray-50 dark:bg-gray-800/40">
              <tr>
                <th scope="col" class="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Property</th>
                <th scope="col" class="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                <th scope="col" class="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default</th>
                <th scope="col" class="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">length</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-teal-600 dark:text-teal-400 font-mono">number</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-mono">8</td>
                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Total length of the password.</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">capitalLetter</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-teal-600 dark:text-teal-400 font-mono">number</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-mono">1</td>
                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Minimum number of uppercase letters.</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">smallLetter</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-teal-600 dark:text-teal-400 font-mono">number</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-mono">3</td>
                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Minimum number of lowercase letters.</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">number</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-teal-600 dark:text-teal-400 font-mono">number</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-mono">2</td>
                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Minimum number of digits (0-9).</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">specialCharacter</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-teal-600 dark:text-teal-400 font-mono">number</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-mono">2</td>
                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Minimum special characters.</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">random</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-teal-600 dark:text-teal-400 font-mono">boolean</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-mono">false</td>
                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Whether to thoroughly shuffle output.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-gray-900 border border-gray-800 rounded-2xl p-5 overflow-x-auto">
<pre><code class="language-typescript text-gray-300 text-sm font-mono"><span class="text-teal-400">import</span> { uniquePassword } <span class="text-teal-400">from</span> 'unique-login-credential';

<span class="text-gray-500">// Default configuration</span>
<span class="text-teal-400">const</span> defaultPwd = <span class="text-white">uniquePassword</span>();
console.<span class="text-teal-300">log</span>(defaultPwd);

<span class="text-gray-500">// Custom configuration</span>
<span class="text-teal-400">const</span> customPwd = <span class="text-white">uniquePassword</span>({
  length: <span class="text-yellow-300">12</span>,
  capitalLetter: <span class="text-yellow-300">2</span>,
  specialCharacter: <span class="text-yellow-300">1</span>,
  random: <span class="text-teal-400">true</span>
});
console.<span class="text-teal-300">log</span>(customPwd);</code></pre>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <span class="text-teal-500 mr-2">#</span> uniqueUsername(options)
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6 font-light leading-relaxed">
          Combines a user-defined prefix with a randomized alphanumeric suffix according to the supplied configuration.
        </p>

        <div class="border border-gray-100 dark:border-gray-800/60 rounded-2xl overflow-hidden mb-6 bg-white dark:bg-gray-900">
          <table class="min-w-full divide-y divide-gray-100 dark:divide-gray-800 text-left">
            <thead class="bg-gray-50 dark:bg-gray-800/40">
              <tr>
                <th scope="col" class="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Property</th>
                <th scope="col" class="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                <th scope="col" class="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default</th>
                <th scope="col" class="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">prefix</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-teal-600 dark:text-teal-400 font-mono">string</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-mono">""</td>
                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Fixed string prepended to username.</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">length</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-teal-600 dark:text-teal-400 font-mono">number</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-mono">6</td>
                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Total length including prefix.</td>
              </tr>
              <tr class="bg-gray-50/50 dark:bg-gray-800/20">
                <td colspan="4" class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 italic text-center">
                  Accepts all configuration options from <code class="text-teal-600 dark:text-teal-400 font-mono not-italic px-1">uniquePassword</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-gray-900 border border-gray-800 rounded-2xl p-5 overflow-x-auto">
<pre><code class="language-typescript text-gray-300 text-sm font-mono"><span class="text-teal-400">import</span> { uniqueUsername } <span class="text-teal-400">from</span> 'unique-login-credential';

<span class="text-gray-500">// Using a prefix</span>
<span class="text-teal-400">const</span> user1 = <span class="text-white">uniqueUsername</span>({
  prefix: <span class="text-green-300">"admin_"</span>,
  length: <span class="text-yellow-300">12</span>,
  random: <span class="text-teal-400">true</span>
});
console.<span class="text-teal-300">log</span>(user1); <span class="text-gray-500">// e.g. "admin_2hA9k"</span></code></pre>
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
      // Basic feedback
    })
}
</script>
