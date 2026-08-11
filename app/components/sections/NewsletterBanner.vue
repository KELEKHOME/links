<!-- components/NewsletterBanner.vue -->
<template>
  <section class="w-full max-w-2xl mx-auto mt-16">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="relative overflow-hidden rounded-3xl p-8 text-center border
             bg-black/5 border-black/10 dark:bg-white/5 dark:border-white/10"
    >
      <!-- decoración de fondo -->
      <div class="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
      <div class="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

      <div class="relative">
        <div class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-400/20 mb-4">
          <Icon name="mdi:bell-outline" class="text-2xl text-amber-500" />
        </div>
        <h2 class="text-xl font-bold tracking-tight">{{ $t('newsletter.title') }}</h2>
        <p class="mt-2 text-sm opacity-55 max-w-xs mx-auto leading-relaxed">
          {{ $t('newsletter.subtitle') }}
        </p>

        <form class="mt-6 flex flex-col sm:flex-row gap-2 max-w-sm mx-auto" @submit.prevent="subscribe">
          <input
            v-model="email"
            type="email"
            required
            :placeholder="$t('newsletter.placeholder')"
            class="flex-1 px-4 py-2.5 rounded-xl border text-sm outline-none transition
                   bg-white/60 border-zinc-200 placeholder:opacity-40 focus:border-zinc-400
                   dark:bg-white/5 dark:border-white/10 dark:focus:border-white/30"
          />
          <button
            type="submit"
            :disabled="status === 'sending' || status === 'success'"
            class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
                   bg-zinc-900 text-white hover:bg-zinc-700 disabled:opacity-60
                   dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <span v-if="status === 'sending'">
              <Icon name="mdi:loading" class="animate-spin" />
            </span>
            <span v-else-if="status === 'success'">{{ $t('newsletter.success') }}</span>
            <span v-else>{{ $t('newsletter.cta') }}</span>
          </button>
        </form>

        <p v-if="status === 'error'" class="mt-2 text-xs text-red-500">
          {{ $t('newsletter.error') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = ref('')
const { status, submit } = useFormspree()
const { polite, assertive } = useAnnouncer()

async function subscribe() {
  await submit({ email: email.value, tipo: 'newsletter' })
  if (status.value === 'success') {
    email.value = ''
    polite('¡Suscripción confirmada! Te mantendremos al tanto.')
  } else if (status.value === 'error') {
    assertive('Error al suscribirse. Por favor, inténtalo de nuevo.')
  }
}
</script>
