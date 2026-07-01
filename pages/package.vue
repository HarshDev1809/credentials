<template>
  <div class="max-w-4xl mx-auto space-y-12">
    <div class="space-y-4">
      <h1 class="text-4xl font-extrabold text-gray-900">unique-login-credential</h1>
      <p class="text-lg text-gray-600">
        A robust, type-safe library to generate unique passwords and usernames.
      </p>

      <div class="bg-gray-900 rounded-lg p-4 flex items-center justify-between">
        <code class="text-[#EADDCA] text-sm font-mono">npm install unique-login-credential</code>
        <UButton color="gray" variant="ghost" icon="i-heroicons-clipboard-document" @click="copyCommand" aria-label="Copy install command" class="text-gray-400 hover:text-white" />
      </div>
    </div>

    <div class="space-y-8">
      <section>
        <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">uniquePassword(options)</h2>
        <p class="text-gray-600 mb-4">
          Generates a unique password based on the provided configuration. You can specify exactly how many of each character type you want in the final output.
        </p>
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">length</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8</td>
                <td class="px-6 py-4 text-sm text-gray-500">Total length of the password.</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">capitalLetter</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                <td class="px-6 py-4 text-sm text-gray-500">Minimum number of uppercase letters (A-Z).</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">smallLetter</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3</td>
                <td class="px-6 py-4 text-sm text-gray-500">Minimum number of lowercase letters (a-z).</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">number</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                <td class="px-6 py-4 text-sm text-gray-500">Minimum number of digits (0-9).</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">specialCharacter</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                <td class="px-6 py-4 text-sm text-gray-500">Minimum number of special characters (!@#$_*).</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">random</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                <td class="px-6 py-4 text-sm text-gray-500">Whether to thoroughly shuffle the final output string.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
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
        <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">uniqueUsername(options)</h2>
        <p class="text-gray-600 mb-4">
          Combines a user-defined prefix with a randomized alphanumeric suffix according to the supplied configuration.
        </p>
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">prefix</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">""</td>
                <td class="px-6 py-4 text-sm text-gray-500">The fixed string to prepend to the generated username.</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">length</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6</td>
                <td class="px-6 py-4 text-sm text-gray-500">Total length of the username (including prefix).</td>
              </tr>
              <tr>
                <td colspan="4" class="px-6 py-4 text-sm text-gray-500 italic bg-gray-50">
                  Also accepts all configuration options from uniquePassword (capitalLetter, smallLetter, etc.)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
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
useHead({
  title: 'NPM Package Documentation | Credential Platform',
  meta: [
    { name: 'description', content: 'Official documentation for unique-login-credential npm package.' }
  ]
})

const copyCommand = () => {
  navigator.clipboard.writeText('npm install unique-login-credential')
    .then(() => {
      // Could show a toast notification here using useToast() if we wanted to
      alert('Command copied to clipboard!');
    })
}
</script>
