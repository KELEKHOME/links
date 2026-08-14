<!-- app/components/ui/CraftFeaturesSwitcher.vue -->
<template>
  <div class="rounded-3xl border border-stone-200/90 dark:border-stone-800 bg-white dark:bg-stone-900 p-5 sm:p-6 shadow-xs space-y-4">
    <!-- Header -->
    <div class="flex items-center justify-between gap-3 border-b border-stone-100 dark:border-stone-800/80 pb-3">
      <div class="flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-lg">
          <Icon name="mdi:toggle-switch-outline" />
        </div>
        <div>
          <h3 class="text-sm font-bold text-stone-900 dark:text-stone-100">
            Mejoras de Conversión & Artesanía
          </h3>
          <p class="text-[11px] text-stone-500 dark:text-stone-400">
            Activa o desactiva las propuestas de optimización de leads con un solo clic.
          </p>
        </div>
      </div>

      <div class="flex items-center gap-1.5">
        <button
          type="button"
          @click="setAll(true)"
          class="px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-stone-800 text-[10px] font-semibold text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors cursor-pointer"
        >
          Activar Todas
        </button>
        <button
          type="button"
          @click="setAll(false)"
          class="px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-stone-800 text-[10px] font-semibold text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors cursor-pointer"
        >
          Desactivar
        </button>
      </div>
    </div>

    <!-- 3 Features Toggles List -->
    <div class="space-y-3">
      
      <!-- Feature 1: Hero Impacto Artesanal en Home -->
      <div class="p-3.5 rounded-2xl border border-stone-100 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-950/40 flex items-center justify-between gap-4">
        <div class="space-y-0.5 min-w-0 flex-1">
          <div class="flex items-center gap-1.5">
            <span class="text-xs font-bold text-stone-900 dark:text-stone-100">
              1. Hero Artesanal de Primer Impacto (Home)
            </span>
            <span
              class="px-1.5 py-0.2 rounded text-[9px] font-bold uppercase tracking-wider"
              :class="features.heroImpact ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-stone-200 dark:bg-stone-800 text-stone-500'"
            >
              {{ features.heroImpact ? 'Activo' : 'Inactivo' }}
            </span>
          </div>
          <p class="text-[11px] text-stone-500 dark:text-stone-400 leading-snug">
            Muestra el bloque de valor artesanal, fotos de piezas reales entregadas y claim de madera maciza a medida.
          </p>
        </div>

        <button
          type="button"
          @click="toggleFeature('heroImpact')"
          :class="[
            'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none',
            features.heroImpact ? 'bg-amber-600' : 'bg-stone-300 dark:bg-stone-700'
          ]"
          role="switch"
          :aria-checked="features.heroImpact"
        >
          <span
            aria-hidden="true"
            :class="[
              'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
              features.heroImpact ? 'translate-x-5' : 'translate-x-0'
            ]"
          />
        </button>
      </div>

      <!-- Feature 2: Simulador a WhatsApp Directo -->
      <div class="p-3.5 rounded-2xl border border-stone-100 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-950/40 flex items-center justify-between gap-4">
        <div class="space-y-0.5 min-w-0 flex-1">
          <div class="flex items-center gap-1.5">
            <span class="text-xs font-bold text-stone-900 dark:text-stone-100">
              2. Simulador con WhatsApp Directo (1-Clic)
            </span>
            <span
              class="px-1.5 py-0.2 rounded text-[9px] font-bold uppercase tracking-wider"
              :class="features.simulatorDirectWhatsApp ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-stone-200 dark:bg-stone-800 text-stone-500'"
            >
              {{ features.simulatorDirectWhatsApp ? 'Activo' : 'Inactivo' }}
            </span>
          </div>
          <p class="text-[11px] text-stone-500 dark:text-stone-400 leading-snug">
            Cierra leads al instante precargando las medidas, madera y precio orientativo en WhatsApp sin fricción.
          </p>
        </div>

        <button
          type="button"
          @click="toggleFeature('simulatorDirectWhatsApp')"
          :class="[
            'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none',
            features.simulatorDirectWhatsApp ? 'bg-amber-600' : 'bg-stone-300 dark:bg-stone-700'
          ]"
          role="switch"
          :aria-checked="features.simulatorDirectWhatsApp"
        >
          <span
            aria-hidden="true"
            :class="[
              'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
              features.simulatorDirectWhatsApp ? 'translate-x-5' : 'translate-x-0'
            ]"
          />
        </button>
      </div>

      <!-- Feature 3: Fichas Detalladas & CTA en Proyectos -->
      <div class="p-3.5 rounded-2xl border border-stone-100 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-950/40 flex items-center justify-between gap-4">
        <div class="space-y-0.5 min-w-0 flex-1">
          <div class="flex items-center gap-1.5">
            <span class="text-xs font-bold text-stone-900 dark:text-stone-100">
              3. Fichas de Artesanía & CTA en Proyectos
            </span>
            <span
              class="px-1.5 py-0.2 rounded text-[9px] font-bold uppercase tracking-wider"
              :class="features.projectsDetailedView ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-stone-200 dark:bg-stone-800 text-stone-500'"
            >
              {{ features.projectsDetailedView ? 'Activo' : 'Inactivo' }}
            </span>
          </div>
          <p class="text-[11px] text-stone-500 dark:text-stone-400 leading-snug">
            Muestra detalles técnicos (madera, acabados naturales, reto) y botón directo "¿Quieres una pieza similar?".
          </p>
        </div>

        <button
          type="button"
          @click="toggleFeature('projectsDetailedView')"
          :class="[
            'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none',
            features.projectsDetailedView ? 'bg-amber-600' : 'bg-stone-300 dark:bg-stone-700'
          ]"
          role="switch"
          :aria-checked="features.projectsDetailedView"
        >
          <span
            aria-hidden="true"
            :class="[
              'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
              features.projectsDetailedView ? 'translate-x-5' : 'translate-x-0'
            ]"
          />
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const { features, toggleFeature, setAll } = useCraftFeatures()
</script>
