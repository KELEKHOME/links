<!-- components/CustomCursor.vue -->
<template>
  <ClientOnly>
    <div
      v-if="visible"
      class="custom-cursor pointer-events-none fixed z-[99999] transition-transform duration-100"
      :style="{ left: `${x}px`, top: `${y}px`, transform: `translate(-50%, -50%) scale(${hovered ? 1.8 : 1})` }"
    >
      <div
        class="w-5 h-5 rounded-full border-2 transition-all duration-200"
        :class="hovered
          ? 'border-amber-400 bg-amber-400/20 scale-110'
          : 'border-zinc-600 dark:border-white/60 bg-transparent'"
      />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const x = ref(0)
const y = ref(0)
const visible = ref(false)
const hovered = ref(false)

onMounted(() => {
  // Solo en dispositivos con mouse
  if (window.matchMedia('(pointer: fine)').matches) {
    document.body.style.cursor = 'none'
    visible.value = true
  }

  const onMove = (e: MouseEvent) => { x.value = e.clientX; y.value = e.clientY }
  const onEnter = (e: MouseEvent) => {
    const el = e.target as HTMLElement
    if (el.closest('a, button, [role="button"]')) hovered.value = true
  }
  const onLeave = () => { hovered.value = false }

  document.addEventListener('mousemove', onMove)
  document.addEventListener('mouseover', onEnter)
  document.addEventListener('mouseout', onLeave)

  onUnmounted(() => {
    document.body.style.cursor = ''
    document.removeEventListener('mousemove', onMove)
    document.removeEventListener('mouseover', onEnter)
    document.removeEventListener('mouseout', onLeave)
  })
})
</script>
