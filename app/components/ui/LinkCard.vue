<!-- components/LinkCard.vue -->
<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="group relative flex items-center gap-4 w-full px-5 py-4 rounded-2xl border
           overflow-hidden transition-all duration-300
           bg-black/5 border-black/10 hover:bg-black/10
           dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10"
    @click="trackClick"
  >
    <!-- shimmer sweep -->
    <div class="shimmer absolute inset-0 opacity-0 group-hover:opacity-100" />

    <Icon
      :name="icon"
      class="relative text-2xl shrink-0 transition-colors duration-300"
      :style="{ color: iconColor }"
    />
    <span class="relative flex-1 font-medium text-center">{{ title }}</span>
    <span class="relative opacity-30 group-hover:opacity-80 transition text-lg">→</span>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  url: string
  icon: string
  color?: string
}>()

const iconColor = computed(() => props.color ?? 'currentColor')

function trackClick() {
  umTrackEvent('link_click', {
    title: props.title,
    url: props.url
  })
}
</script>

<style scoped>
.shimmer {
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255, 255, 255, 0.12) 50%,
    transparent 60%
  );
  background-size: 200% 100%;
  animation: shimmer-sweep 0.6s ease forwards;
}

@keyframes shimmer-sweep {
  from { background-position: 200% center; }
  to   { background-position: -100% center; }
}
</style>