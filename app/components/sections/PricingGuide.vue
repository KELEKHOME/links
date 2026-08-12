<!-- app/components/sections/PricingGuide.vue -->
<template>
  <section class="w-full max-w-2xl mx-auto mt-16">
    <div
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="text-center mb-8 space-y-2"
    >
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-semibold">
        <Icon name="mdi:tag-multiple-outline" class="text-base text-amber-600 dark:text-amber-400" />
        <span>Precios Orientativos & Rangos</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
        Guía Transparente de Precios
      </h2>
      <p class="text-xs sm:text-sm text-stone-500 dark:text-stone-400 max-w-lg mx-auto">
        Cada pieza es única e incluye selección de veta, trabajo a mano, secado óptimo y acabado en aceites naturales.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div
        v-for="(item, i) in priceItems"
        :key="item.title"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: i * 100 } }"
        class="p-5 rounded-2xl border bg-white/70 dark:bg-stone-900/70 border-stone-200/80 dark:border-stone-800 backdrop-blur-sm space-y-3 hover:border-amber-500/40 transition-all duration-200"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Icon :name="item.icon" class="text-xl" />
            </div>
            <h3 class="font-bold text-stone-900 dark:text-stone-100 text-sm">
              {{ item.title }}
            </h3>
          </div>
          <span class="text-xs font-bold text-amber-700 dark:text-amber-300 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20">
            {{ item.range }}
          </span>
        </div>

        <p class="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
          {{ item.desc }}
        </p>

        <div class="text-[11px] text-stone-400 font-medium pt-1 flex items-center gap-1.5 border-t border-stone-100 dark:border-stone-800">
          <Icon name="mdi:check-circle" class="text-amber-500" />
          <span>{{ item.highlight }}</span>
        </div>
      </div>
    </div>

    <!-- What's included note -->
    <div class="mt-6 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/15 flex items-center gap-3 text-xs text-stone-600 dark:text-stone-300">
      <Icon name="mdi:shield-check" class="text-2xl text-amber-600 shrink-0" />
      <span>
        <strong>Sin sorpresas:</strong> Todos los presupuestos incluyen IVA, certificado FSC de la madera, muestras de tono y soporte directo durante la confección.
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
const priceItems = [
  {
    title: 'Mesas de Comedor',
    range: 'Desde 600€',
    icon: 'mdi:table-furniture',
    desc: 'Roble, Nogal u Olivo macizo. Cantos orgánicos vivos o rectos pulidos.',
    highlight: 'Estructura o patas a medida incluidas'
  },
  {
    title: 'Aparadores & Muebles TV',
    range: 'Desde 780€',
    icon: 'mdi:cupboard-outline',
    desc: 'Puertas alistonadas artesanales, pasacables integrados y bisagras hidráulicas.',
    highlight: 'Distribución interior personalizable'
  },
  {
    title: 'Mesas de Centro & Auxiliares',
    range: 'Desde 300€',
    icon: 'mdi:table',
    desc: 'Piezas singulares con nudos rellenos en resina ahumada o aceite mate.',
    highlight: 'Piezas de alto impacto visual'
  },
  {
    title: 'Escritorios & Mesas Trabajo',
    range: 'Desde 420€',
    icon: 'mdi:desk',
    desc: 'Estructuras firmes para trabajo diario con gestión de cableado oculta.',
    highlight: 'Ergonomía y tacto suave'
  }
]
</script>
