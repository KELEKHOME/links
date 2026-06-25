<!-- components/CookieBanner.vue -->
<template>
  <Transition name="slide-up">
    <div
      v-if="!accepted"
      class="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50
             rounded-2xl border px-5 py-4 shadow-xl backdrop-blur
             bg-white border-zinc-200 text-zinc-900
             dark:bg-zinc-900/90 dark:border-white/10 dark:text-white"
    >
      <p class="text-sm opacity-80 mb-3">
        Usamos cookies analíticas (Google Analytics) para entender cómo se usa esta página.
        Sin datos personales ni publicidad.
      </p>
      <div class="flex gap-2">
        <button
          class="flex-1 py-2 rounded-xl bg-zinc-900 text-white text-sm font-medium hover:opacity-90 transition dark:bg-white dark:text-black"
          @click="accept"
        >
          Aceptar
        </button>
        <button
          class="flex-1 py-2 rounded-xl bg-black/10 text-sm hover:bg-black/20 transition dark:bg-white/10 dark:hover:bg-white/20"
          @click="decline"
        >
          Rechazar
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const { initialize } = useGtag()

const accepted = ref(false)

onMounted(() => {
  accepted.value = localStorage.getItem('cookie-consent') === 'accepted'
  if (accepted.value) initialize()
})

function accept() {
  localStorage.setItem('cookie-consent', 'accepted')
  accepted.value = true
  initialize()
}

function decline() {
  localStorage.setItem('cookie-consent', 'declined')
  accepted.value = true
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
