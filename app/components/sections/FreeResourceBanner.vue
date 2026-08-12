<!-- app/components/sections/FreeResourceBanner.vue -->
<template>
  <section class="w-full max-w-2xl mx-auto mt-12">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="p-6 sm:p-8 rounded-[28px] border bg-white/80 dark:bg-stone-900/80 border-stone-200/90 dark:border-stone-800 shadow-xs relative overflow-hidden backdrop-blur-sm"
    >
      <!-- Background subtle warm glow on bottom-right -->
      <div class="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

      <div class="flex flex-col sm:flex-row items-center gap-6 relative z-10">
        
        <!-- Left: PDF Book Cover Mockup -->
        <div class="shrink-0 flex items-center justify-center">
          <div
            class="w-32 h-40 sm:w-36 sm:h-44 rounded-2xl p-4 flex flex-col justify-between text-white shadow-xl shadow-amber-950/20 border border-amber-900/40 relative overflow-hidden select-none transform transition-transform hover:scale-105 duration-300
                   bg-gradient-to-br from-stone-900 via-stone-900 to-amber-950"
          >
            <!-- Top Row: Icon & PDF tag -->
            <div class="flex items-center justify-between">
              <Icon name="mdi:book-open-page-variant" class="text-amber-400 text-lg" />
              <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-300 opacity-90">PDF</span>
            </div>

            <!-- Middle Row: Book Title -->
            <div class="space-y-1 my-auto">
              <div class="font-serif italic text-[11px] text-amber-300 font-medium">
                Kelek Home
              </div>
              <div class="font-bold text-xs sm:text-sm leading-tight text-white tracking-tight">
                Guía de la Madera
              </div>
            </div>

            <!-- Bottom Row: Subtitle -->
            <div class="text-[9px] text-stone-400 font-medium">
              Edición Taller
            </div>

            <!-- Subtle cover shine overlay -->
            <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
          </div>
        </div>

        <!-- Right: Content & Form -->
        <div class="flex-1 space-y-3.5 text-left">
          
          <!-- Badge -->
          <div>
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 border border-amber-200/60 dark:border-amber-900/50 text-[11px] font-bold tracking-wide">
              <Icon name="mdi:gift-outline" class="text-amber-700 dark:text-amber-400 text-xs" />
              <span>RECURSO GRATUITO</span>
            </div>
          </div>

          <!-- Title -->
          <h3 class="text-lg sm:text-xl font-serif font-bold text-stone-900 dark:text-stone-100 leading-snug tracking-tight">
            Guía de Mantenimiento y Cuidado de la Madera Maciza
          </h3>

          <!-- Subtitle -->
          <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            Aprende qué aceites usar, cómo proteger la superficie ante humedad o calor y cómo reparar pequeños rasguños en casa.
          </p>

          <!-- Form / Success State -->
          <div class="pt-1">
            <div v-if="submitted" class="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-left space-y-1.5">
              <div class="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-200">
                <Icon name="mdi:check-circle" class="text-amber-600 text-base" />
                <span>¡Guía lista para ti!</span>
              </div>
              <p class="text-[11px] text-stone-600 dark:text-stone-300">
                Hemos registrado tu email. Puedes descargarla directamente ahora:
              </p>
              <a
                href="#"
                @click.prevent="openGuide"
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 text-white font-bold text-xs hover:bg-amber-700 transition"
              >
                <span>Abrir Guía PDF</span>
                <Icon name="mdi:download" class="text-sm" />
              </a>
            </div>

            <form v-else @submit.prevent="handleDownload" class="flex flex-col sm:flex-row items-stretch gap-2.5">
              <input
                v-model="email"
                type="email"
                required
                placeholder="Tu email para recibir la guía..."
                class="flex-1 px-4 py-2.5 rounded-2xl bg-stone-100/80 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/80 text-xs text-stone-900 dark:text-stone-100 placeholder:text-stone-400 outline-none focus:border-amber-600 transition"
              />
              <button
                type="submit"
                :disabled="loading"
                class="px-5 py-2.5 rounded-2xl font-bold text-xs text-white transition-all duration-200
                       bg-amber-600 hover:bg-amber-700 disabled:opacity-60
                       flex items-center justify-center gap-1.5 shrink-0 cursor-pointer shadow-xs"
              >
                <Icon v-if="loading" name="mdi:loading" class="animate-spin text-sm" />
                <template v-else>
                  <span>Descargar Guía</span>
                  <Icon name="mdi:tray-arrow-down" class="text-sm" />
                </template>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = ref('')
const loading = ref(false)
const submitted = ref(false)
const { addLead } = useLeads()

async function handleDownload() {
  if (!email.value) return
  loading.value = true
  try {
    await addLead({
      type: 'guide',
      email: email.value,
      contact: email.value,
      notas: 'Solicitó descarga de la Guía de Mantenimiento de Madera Maciza'
    })
    submitted.value = true
  } catch {
    submitted.value = true
  } finally {
    loading.value = false
  }
}

function openGuide() {
  alert('¡Gracias por descargar la guía! El enlace de descarga de la Guía de Mantenimiento Kelek Home ha sido activado.')
}
</script>

