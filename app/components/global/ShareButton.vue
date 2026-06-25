<!-- components/ShareButton.vue -->
<template>
  <ClientOnly>
    <div class="fixed bottom-6 right-6 z-40">
      <Transition name="pop">
        <button
          v-if="show"
          class="group flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg border transition-all duration-300
                 bg-white/90 border-zinc-200 text-zinc-900 hover:bg-white hover:shadow-xl hover:-translate-y-0.5
                 dark:bg-zinc-900/90 dark:border-white/10 dark:text-white dark:hover:bg-zinc-800
                 backdrop-blur-sm"
          @click="share"
        >
          <Icon :name="copied ? 'mdi:check' : 'mdi:share-variant-outline'" class="text-base transition-colors" :class="copied ? 'text-green-500' : ''" />
          <span class="text-xs font-medium">{{ copied ? '¡Copiado!' : 'Compartir' }}</span>
        </button>
      </Transition>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const show = ref(false)
const copied = ref(false)

onMounted(() => {
  setTimeout(() => { show.value = true }, 1500)
})

async function share() {
  const data = {
    title: 'Kelek Home',
    text: 'Descubre mobiliario artesanal único hecho a mano 🪵',
    url: window.location.href
  }
  if (navigator.share) {
    await navigator.share(data)
  } else {
    await navigator.clipboard.writeText(window.location.href)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2500)
  }
}
</script>

<style scoped>
.pop-enter-active { transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
.pop-leave-active { transition: all 0.2s ease; }
.pop-enter-from  { opacity: 0; transform: scale(0.5) translateY(10px); }
.pop-leave-to    { opacity: 0; transform: scale(0.8); }
</style>
