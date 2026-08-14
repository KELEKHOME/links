<!-- app/components/sections/HomeCraftHero.vue -->
<template>
  <section class="w-full max-w-2xl mx-auto space-y-4">
    <!-- Main Hero Card -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 15 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 400 } }"
      class="relative overflow-hidden rounded-[28px] border border-stone-200/90 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm p-6 sm:p-7 space-y-6"
    >
      <!-- Background subtle warm accent -->
      <div class="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <!-- Top Header & Badges -->
      <div class="flex items-center justify-between gap-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-500/20 text-[11px] font-bold tracking-wider uppercase">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span>Taller de Ebanistería & Autor</span>
        </div>

        <span class="text-xs text-stone-600 dark:text-stone-300 font-medium flex items-center gap-1">
          <Icon name="mdi:map-marker-outline" class="text-amber-600 dark:text-amber-400 text-sm" />
          <span>España</span>
        </span>
      </div>

      <!-- Main Value Proposition -->
      <div class="space-y-2">
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
          Mobiliario artesanal en madera maciza, <span class="font-serif italic font-normal text-amber-700 dark:text-amber-400">hecho a medida</span> de tu vida.
        </h2>
        <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
          Sin tableros sintéticos ni fabricación en serie. Cada mesa, consola o estantería nace de tablones seleccionados uno a uno y tratados con aceites naturales.
        </p>
      </div>

      <!-- Feature Highlights Row -->
      <div class="grid grid-cols-3 gap-2 py-3 border-y border-stone-100 dark:border-stone-800/80 text-center">
        <div class="space-y-0.5">
          <span class="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 block">100% Macizo</span>
          <span class="text-[10px] sm:text-[11px] text-stone-600 dark:text-stone-300 block">Roble, Nogal y Castaño</span>
        </div>
        <div class="space-y-0.5 border-x border-stone-100 dark:border-stone-800/80">
          <span class="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 block">Sin Tóxicos</span>
          <span class="text-[10px] sm:text-[11px] text-stone-600 dark:text-stone-300 block">Aceites y ceras bio</span>
        </div>
        <div class="space-y-0.5">
          <span class="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 block">A Medida</span>
          <span class="text-[10px] sm:text-[11px] text-stone-600 dark:text-stone-300 block">Adaptado a tu espacio</span>
        </div>
      </div>

      <!-- Interactive Gallery of Real Delivered Pieces -->
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-300">
            Piezas destacadas del taller
          </span>
          <div class="flex items-center gap-1.5">
            <button
              v-for="(piece, idx) in pieces"
              :key="piece.id"
              type="button"
              @click="activePieceIndex = idx"
              :class="[
                'w-2.5 h-2.5 rounded-full transition-all cursor-pointer',
                activePieceIndex === idx
                  ? 'bg-amber-600 w-6'
                  : 'bg-stone-200 dark:bg-stone-700 hover:bg-stone-400'
              ]"
              :aria-label="`Ver ${piece.title}`"
            />
          </div>
        </div>

        <!-- Active Piece Card -->
        <div class="relative rounded-2xl overflow-hidden border border-stone-200/80 dark:border-stone-800 bg-stone-50 dark:bg-stone-950/60 p-3 sm:p-4">
          <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            <!-- Piece Image -->
            <div class="sm:col-span-5 h-44 sm:h-36 rounded-xl overflow-hidden relative">
              <img
                :src="currentPiece.image"
                :alt="currentPiece.title"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <span class="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-white text-[10px] font-medium">
                {{ currentPiece.wood }}
              </span>
            </div>

            <!-- Piece Details & Quick Action -->
            <div class="sm:col-span-7 space-y-2">
              <div>
                <h4 class="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100">
                  {{ currentPiece.title }}
                </h4>
                <p class="text-xs text-stone-600 dark:text-stone-300 line-clamp-2 mt-0.5">
                  {{ currentPiece.description }}
                </p>
              </div>

              <div class="flex flex-wrap items-center gap-2 text-[11px] text-stone-600 dark:text-stone-300">
                <span class="font-medium bg-white dark:bg-stone-800 px-2 py-0.5 rounded-md border border-stone-200 dark:border-stone-700">
                  📏 {{ currentPiece.dimensions }}
                </span>
                <span class="font-medium bg-white dark:bg-stone-800 px-2 py-0.5 rounded-md border border-stone-200 dark:border-stone-700">
                  🌱 {{ currentPiece.finish }}
                </span>
              </div>

              <!-- Action Links -->
              <div class="pt-1 flex items-center gap-2">
                <NuxtLink
                  to="/hola/proyectos"
                  class="text-xs font-bold text-amber-800 dark:text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Ver en proyectos</span>
                  <Icon name="mdi:arrow-right" class="text-sm" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Direct CTAs Row -->
      <div class="pt-1 flex flex-col sm:flex-row items-center gap-3">
        <NuxtLink
          to="/hola/contacto"
          class="w-full sm:flex-1 py-3 px-5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
        >
          <Icon name="simple-icons:whatsapp" class="text-base" />
          <span>Consultar pieza por WhatsApp</span>
        </NuxtLink>

        <NuxtLink
          to="/hola/proyectos"
          class="w-full sm:w-auto py-3 px-5 rounded-2xl border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 font-semibold text-xs sm:text-sm text-center transition-colors"
        >
          Ver trabajos
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const activePieceIndex = ref(0)

const pieces = [
  {
    id: 'mesa-roble',
    title: 'Mesa de Comedor "Veta Continua"',
    wood: 'Roble Europeo Macizo',
    dimensions: '220 x 95 x 75 cm',
    finish: 'Aceite Rubio Monocoat 0% VOC',
    description: 'Tablero continuo seleccionado con bordes semirústicos y patas con ensamble de cola de milano.',
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=600&h=400&fit=crop'
  },
  {
    id: 'consola-nogal',
    title: 'Consola Flotante "Nogal Vivo"',
    wood: 'Nogal Español Macizo',
    dimensions: '140 x 35 x 18 cm',
    finish: 'Cera de abeja natural',
    description: 'Líneas limpias con frentes de cajón biselados sin tiradores para resaltar el nudo natural de la madera.',
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600&h=400&fit=crop'
  },
  {
    id: 'aparador-castano',
    title: 'Aparador Minimalista "Sombra"',
    wood: 'Castaño y Fresno',
    dimensions: '160 x 45 x 78 cm',
    finish: 'Aceite de linaza puro',
    description: 'Estructura ligera con celosía ranurada a mano y almacenamiento interior a medida.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&h=400&fit=crop'
  }
]

const currentPiece = computed(() => pieces[activePieceIndex.value] || pieces[0])
</script>
