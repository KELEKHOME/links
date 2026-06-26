<!-- components/CookieBanner.vue -->
<template>
  <Transition name="slide-up">
    <div
      v-if="!dismissed"
      class="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50
             rounded-2xl border px-5 py-4 shadow-xl backdrop-blur
             bg-white border-zinc-200 text-zinc-900
             dark:bg-zinc-900/90 dark:border-white/10 dark:text-white"
    >
      <p class="text-sm opacity-80 mb-3">
        Esta web usa cookies técnicas propias. No rastreamos usuarios ni usamos publicidad.
        Las analíticas son anónimas y respetuosas con tu privacidad.
      </p>
      <div class="flex gap-2">
        <button
          class="flex-1 py-2 rounded-xl bg-zinc-900 text-white text-sm font-medium hover:opacity-90 transition dark:bg-white dark:text-black"
          @click="dismiss"
        >
          Entendido
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const dismissed = ref(false)

onMounted(() => {
  dismissed.value = !!localStorage.getItem('cookie-notice-dismissed')
})

function dismiss() {
  localStorage.setItem('cookie-notice-dismissed', '1')
  dismissed.value = true
}
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(1rem);
  opacity: 0;
}
</style>
