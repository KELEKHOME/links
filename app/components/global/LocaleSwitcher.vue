<!-- components/LocaleSwitcher.vue -->
<template>
  <ClientOnly>
    <div class="flex items-center gap-0.5">
      <button
        v-for="loc in locales"
        :key="loc.code"
        :aria-label="loc.name"
        class="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
        :class="locale === loc.code
          ? 'opacity-100 scale-110'
          : 'opacity-30 hover:opacity-70 hover:scale-105'"
        @click="setLocale(loc.code as any)"
      >
        <Icon
          :name="loc.code === 'es' ? 'circle-flags:es' : 'circle-flags:gb'"
          class="text-[20px] block"
        />
      </button>
    </div>
    <template #fallback><div class="w-[76px]" /></template>
  </ClientOnly>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
</script>
