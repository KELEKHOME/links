<template>
  <img
    src="/images/instagram.png"
    alt="Instagram"
    class="shrink-0 object-contain"
    :class="props.class || 'w-5 h-5'"
    loading="lazy"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>

