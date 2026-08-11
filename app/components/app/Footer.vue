<template>
  <footer class="w-full border-t border-black/5 dark:border-white/5">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="max-w-2xl mx-auto px-6 py-6 flex items-center justify-between"
    >
      <!-- Email -->
      <a
        href="mailto:kelek.home@gmail.com"
        class="inline-flex items-center gap-2 text-xs opacity-50 hover:opacity-100 hover:text-amber-500 transition-all duration-200"
      >
        <Icon name="mdi:email-outline" class="w-3.5 h-3.5" />
        kelek.home@gmail.com
      </a>

      <!-- Copyright -->
      <p class="text-xs opacity-25 font-medium">
        © {{ year }} Kelek Home · Hecho con <span class="text-red-400 opacity-100">♥</span>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
