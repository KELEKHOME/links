<template>
  <img
    src="/images/instagram.png"
    alt="Instagram"
    class="shrink-0 object-contain rounded-lg"
    :class="props.class || 'w-5 h-5'"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>

