<!-- app/components/sections/WhatsAppCTA.vue -->
<template>
  <section class="w-full max-w-xl mx-auto mt-10">
    <a
      :href="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 400 } }"
      class="group block p-4 sm:p-5 rounded-[24px] border border-emerald-300/80 dark:border-emerald-700/60
             transition-all duration-300 relative overflow-hidden cursor-pointer
             bg-gradient-to-r from-emerald-500/15 via-emerald-500/5 to-white dark:from-emerald-950/40 dark:via-stone-900/90 dark:to-stone-900
             hover:scale-[1.01] hover:shadow-md hover:border-emerald-500/80 text-stone-900 dark:text-stone-100 no-underline"
    >
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 relative z-10">
        
        <!-- Left: Icon + Text -->
        <div class="flex items-center gap-3.5 min-w-0">
          <!-- WhatsApp Squircle Icon -->
          <div
            class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl text-white flex items-center justify-center shrink-0 relative shadow-xs transition-transform duration-300 group-hover:scale-105"
            style="background-color: rgb(16 185 129 / var(--tw-bg-opacity, 1))"
          >
            <Icon name="simple-icons:whatsapp" class="text-2xl sm:text-3xl" />
            <!-- Online Indicator Dot -->
            <div
              class="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 border-2 border-white dark:border-stone-900 rounded-full"
              style="background-color: rgb(16 185 129 / var(--tw-bg-opacity, 1))"
            />
          </div>

          <!-- Content Block -->
          <div class="space-y-0.5 min-w-0">
            <!-- Top Tag & Badge -->
            <div class="flex items-center gap-2">
              <span class="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase" style="color: rgb(4 120 87 / var(--tw-text-opacity, 1))">
                RESPUESTA EN MENOS DE 2H
              </span>
              <span class="px-2 py-0.5 rounded-md text-[10px] font-medium" style="background-color: rgb(209 250 229 / var(--tw-bg-opacity, 1)); color: rgb(4 120 87 / var(--tw-text-opacity, 1))">
                En el taller
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100 tracking-tight flex items-center gap-1">
              <span>💬</span>
              <span>¿Tienes una idea a medida? Hablemos</span>
            </h3>

            <!-- Subtitle -->
            <p class="text-xs text-stone-600 dark:text-stone-300 font-normal leading-snug truncate">
              Consulta maderas, presupuestos o envíame una foto...
            </p>
          </div>
        </div>

        <!-- Right: Action Button -->
        <div
          class="w-full sm:w-auto px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm text-white transition-all duration-200 shadow-xs flex items-center justify-center gap-1.5 shrink-0 self-stretch sm:self-auto group-hover:brightness-105"
          style="background-color: rgb(5 150 105 / var(--tw-bg-opacity, 1))"
        >
          <span>Abrir chat</span>
          <Icon name="mdi:arrow-right" class="text-base transition-transform duration-200 group-hover:translate-x-1" />
        </div>

      </div>
    </a>
  </section>
</template>

<script setup lang="ts">
const phone = '34600000000'
const message = encodeURIComponent('¡Hola Jesús! Te escribo desde la web de Kelek Home para consultar sobre un mueble a medida.')
const whatsappUrl = `https://wa.me/${phone}?text=${message}`
</script>


