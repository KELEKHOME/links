<!-- components/PolaroidItem.vue -->
<template>
  <a
    :href="permalink"
    target="_blank"
    rel="noopener noreferrer"
    class="block flex-shrink-0 overflow-hidden rounded-xl drop-shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-0 hover:z-10"
    :class="[
      index % 2 === 0 ? '-rotate-3' : 'rotate-3',
    ]"
  >
    <img
      :src="src"
      :alt="alt"
      class="w-52 h-52 object-cover"
      loading="lazy"
    />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  permalink: string
  index: number
}>()
</script>
