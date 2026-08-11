<!-- components/ColorModeButton.vue -->
<template>
  <ClientOnly>
    <button
      :aria-label="`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`"
      class="flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-200
             text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100
             dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/10"
      @click="startViewTransition"
    >
      <Icon :name="isDark ? 'mdi:weather-sunny' : 'mdi:weather-night'" class="text-[22px]" />
    </button>
    <template #fallback>
      <div class="size-[18px]" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

function switchTheme() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

function startViewTransition(event: MouseEvent) {
  if (!document.startViewTransition) {
    switchTheme()
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  )

  const transition = document.startViewTransition(() => {
    switchTheme()
  })

  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ]
      },
      {
        duration: 600,
        easing: 'cubic-bezier(.76,.32,.29,.99)',
        pseudoElement: '::view-transition-new(root)'
      }
    )
  })
}
</script>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-new(root) {
  z-index: 9999;
}
::view-transition-old(root) {
  z-index: 1;
}
</style>
