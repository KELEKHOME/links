<!-- app/components/sections/WhyArtisanal.vue -->
<template>
  <section class="w-full max-w-2xl mx-auto mt-16">
    <!-- Header -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="text-center mb-6 space-y-1.5"
    >
      <div class="text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
        FILOSOFÍA & COMPROMISO
      </div>
      <h2 class="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 tracking-tight">
        ¿Por qué artesanal?
      </h2>
      <p class="text-xs sm:text-sm text-stone-500 dark:text-stone-400 max-w-md mx-auto">
        Cada pieza tiene una historia, un alma y un valor duradero.
      </p>

      <!-- Pill Selector -->
      <div class="pt-3">
        <div class="inline-flex items-center p-1 rounded-full bg-stone-200/60 dark:bg-stone-800/60 text-xs font-medium">
          <button
            type="button"
            @click="activeTab = 'pillars'"
            :class="[
              'px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer',
              activeTab === 'pillars'
                ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-bold shadow-sm'
                : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
            ]"
          >
            Los 3 pilares
          </button>
          <button
            type="button"
            @click="activeTab = 'comparison'"
            :class="[
              'px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer',
              activeTab === 'comparison'
                ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-bold shadow-sm'
                : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
            ]"
          >
            Artesanal vs. Industrial
          </button>
        </div>
      </div>
    </div>

    <!-- Tab 1: Los 3 Pilares -->
    <div v-if="activeTab === 'pillars'" class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div
        v-for="(pillar, i) in pillars"
        :key="pillar.title"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: i * 100 } }"
        class="p-6 rounded-3xl border bg-white/70 dark:bg-stone-900/70 border-stone-200/80 dark:border-stone-800 backdrop-blur-sm flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-all duration-300 shadow-sm"
      >
        <div class="space-y-3">
          <!-- Numeral & Icon Header -->
          <div class="flex items-center justify-between">
            <span class="font-serif italic font-bold text-amber-800 dark:text-amber-400 text-xl">
              {{ pillar.numeral }}
            </span>
            <Icon :name="pillar.icon" class="text-stone-400 dark:text-stone-500 text-lg" />
          </div>

          <!-- Title -->
          <h3 class="font-bold text-stone-900 dark:text-stone-100 text-base leading-snug">
            {{ pillar.title }}
          </h3>

          <!-- Body -->
          <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            {{ pillar.desc }}
          </p>
        </div>

        <!-- Highlight Bottom Box -->
        <div class="pt-3 border-t border-stone-100 dark:border-stone-800/80 text-[11px] font-medium text-amber-900/90 dark:text-amber-300/90 leading-relaxed">
          {{ pillar.highlight }}
        </div>
      </div>
    </div>

    <!-- Tab 2: Artesanal vs Industrial -->
    <div
      v-else
      v-motion
      :initial="{ opacity: 0, y: 15 }"
      :animate="{ opacity: 1, y: 0 }"
      class="p-6 rounded-3xl border bg-white/70 dark:bg-stone-900/70 border-stone-200/80 dark:border-stone-800 backdrop-blur-sm space-y-4"
    >
      <div class="grid grid-cols-2 gap-4 pb-3 border-b border-stone-200/60 dark:border-stone-800 text-xs font-bold uppercase tracking-wider">
        <span class="text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
          <Icon name="mdi:hammer-wrench" />
          Mobiliario Artesanal
        </span>
        <span class="text-stone-400 dark:text-stone-500 flex items-center gap-1.5">
          <Icon name="mdi:factory" />
          Producción Industrial
        </span>
      </div>

      <div
        v-for="item in comparisons"
        :key="item.craft"
        class="grid grid-cols-2 gap-4 text-xs py-2 border-b border-stone-100 dark:border-stone-800/50 last:border-0"
      >
        <div class="text-stone-800 dark:text-stone-200 font-medium flex items-start gap-1.5">
          <Icon name="mdi:check-circle" class="text-amber-600 dark:text-amber-400 text-sm shrink-0 mt-0.5" />
          <span>{{ item.craft }}</span>
        </div>
        <div class="text-stone-500 dark:text-stone-400 flex items-start gap-1.5">
          <Icon name="mdi:close-circle-outline" class="text-stone-400 text-sm shrink-0 mt-0.5" />
          <span>{{ item.industrial }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeTab = ref<'pillars' | 'comparison'>('pillars')

const pillars = [
  {
    numeral: 'I.',
    icon: 'mdi:hand-heart-outline',
    title: 'Hecho a mano',
    desc: 'Cada pieza es creada personalmente en mi taller de Madrid, sin producción en serie ni atajos.',
    highlight: 'Lijado manual a grano fino, ensambles tradicionales a espiga y atención obsesiva por los detalles.'
  },
  {
    numeral: 'II.',
    icon: 'mdi:leaf',
    title: 'Madera sostenible',
    desc: 'Maderas nobles con certificación FSC y acabados ecológicos 100% libres de tóxicos.',
    highlight: 'Tratamos la madera con cera vegetal de abejas y aceites naturales que resaltan su veta orgánica.'
  },
  {
    numeral: 'III.',
    icon: 'mdi:fingerprint',
    title: 'Pieza única e irrepetible',
    desc: 'No existen dos vetas iguales. Tu mueble es exclusivo y cobra carácter con el tiempo.',
    highlight: 'Cada tabla conserva sus nudos naturales y detalles únicos preservados con esmero.'
  }
]

const comparisons = [
  { craft: 'Madera maciza noble (Roble, Nogal, Olivo)', industrial: 'Aglomerado o chapados sintéticos' },
  { craft: 'Uniones tradicionales duraderas reparables', industrial: 'Tornillería estándar y colas industriales' },
  { craft: 'Acabados orgánicos en cera y aceites naturales', industrial: 'Barnices sintéticos de plástico / poliuretano' },
  { craft: 'Diseño a medida según tu espacio exacto', industrial: 'Medidas rígidas estandarizadas' }
]
</script>
