<template>
  <footer class="w-full mt-20 pb-12 transition-colors">
    <div class="max-w-2xl mx-auto px-4 space-y-16">
      
      <!-- Newsletter Card ("EL CUADERNO DEL TALLER") -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 400 } }"
        class="p-8 sm:p-10 rounded-[32px] border transition-all duration-300 relative overflow-hidden
               bg-gradient-to-br from-amber-50/80 via-white to-amber-50/40
               dark:from-stone-900/90 dark:via-stone-900 dark:to-stone-950
               border-stone-200/90 dark:border-stone-800 shadow-sm"
      >
        <!-- Background subtle glow -->
        <div class="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

        <div class="relative space-y-4">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-900 dark:text-amber-200 text-[11px] font-semibold tracking-wider uppercase">
            <Icon name="mdi:email-outline" class="text-amber-700 dark:text-amber-400 text-sm" />
            <span>EL CUADERNO DEL TALLER</span>
          </div>

          <!-- Title -->
          <h2 class="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-snug">
            Acompaña la madera desde su origen
          </h2>

          <!-- Subtitle -->
          <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed max-w-xl">
            Recibe historias del taller, nuevos diseños antes de su publicación y consejos prácticos para el cuidado de la madera natural.
          </p>

          <!-- Form -->
          <form class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-xl" @submit.prevent="subscribe">
            <div class="relative flex-1">
              <Icon name="mdi:email-outline" class="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 text-lg pointer-events-none" />
              <input
                v-model="email"
                type="email"
                required
                placeholder="Tu correo electrónico..."
                class="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-stone-100/80 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-700/60 text-xs sm:text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 outline-none focus:border-stone-400 transition"
              />
            </div>

            <button
              type="submit"
              :disabled="status === 'sending' || status === 'success'"
              class="px-7 py-3.5 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-200
                     bg-stone-900 text-white hover:bg-stone-800 disabled:opacity-60
                     dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200
                     flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              <span v-if="status === 'sending'" class="flex items-center gap-2">
                <Icon name="mdi:loading" class="animate-spin text-base" />
                <span>Enviando...</span>
              </span>
              <span v-else-if="status === 'success'">¡Suscrito!</span>
              <span v-else>Suscribirme →</span>
            </button>
          </form>

          <!-- Microtrust items -->
          <div class="flex flex-wrap items-center gap-3 text-[11px] text-stone-500 dark:text-stone-400 pt-1">
            <span class="flex items-center gap-1.5">
              <Icon name="mdi:shield-check-outline" class="text-amber-600 dark:text-amber-400 text-sm" />
              Sin spam ni correos innecesarios
            </span>
            <span class="opacity-40">•</span>
            <span class="flex items-center gap-1.5">
              <Icon name="mdi:leaf" class="text-emerald-600 dark:text-emerald-400 text-sm" />
              Edición mensual artesanal
            </span>
          </div>

          <p v-if="status === 'error'" class="text-xs text-rose-500 pt-1">
            Algo salió mal al suscribirte. Por favor, inténtalo de nuevo.
          </p>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-6 border-t border-stone-200/60 dark:border-stone-800/60 flex flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-400">
        <p>© {{ year }} Kelek Home · Hecho con <span style="color: rgb(248 113 113 / var(--tw-text-opacity, 1))">♥</span></p>
        
        <div class="flex items-center gap-1">
          <div class="hidden sm:flex items-center gap-1">
            <LocaleSwitcher />
            <div class="w-px h-[1.7rem] bg-zinc-400/70 dark:bg-zinc-500/70 shrink-0" />
          </div>
          <AppColorModeButton />
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
const email = ref('')
const { status, submit } = useFormspree()
const { polite, assertive } = useAnnouncer()

async function subscribe() {
  if (!email.value) return
  await submit({ email: email.value, tipo: 'newsletter' })
  if (status.value === 'success') {
    email.value = ''
    polite('¡Suscripción confirmada! Te mantendremos al tanto.')
  } else if (status.value === 'error') {
    assertive('Error al suscribirse. Por favor, inténtalo de nuevo.')
  }
}
</script>

